'use client'
import "./style.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";
import { bottle, bottleWrapper } from "@/variants";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id, title, desc,shouldAnimate=false }: { id: number , title: string ,desc: string, shouldAnimate?:boolean}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y1 = useParallax(scrollYProgress, 300); 
  const y2 = useParallax(scrollYProgress, 150);

  return (
    <section>
      <motion.div 
      ref={ref} 
      className='image-container'
      variants={bottleWrapper}
      animate={shouldAnimate ? 'animate' : ''}      >
        <motion.img variants={shouldAnimate ? bottle : {}} src={`/${id}.jpg`} alt="Picture Not Loaded" />
      </motion.div>
      <div className='words'>
        <motion.h1 style={{ y: y1 }}>{`${title}`}</motion.h1>
        <motion.p style={{ y: y2 }}>{`${desc}`}</motion.p>
      </div>
    </section>
  );
}


export default function Display() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {[
        { id: 1, title: "Who are we?" , desc:"We are a retail wine and spirits company offering a unique and personalized experience to our clients. When you shop at Promenade, expect exceptional value, convenient ordering, white glove delivery, and carefully curated selections. "},
        { id: 2, title: "About us",desc:"The team at Promenade has over 50 years of sourcing the world's rarest and highly sought-after wine and spirits. Offering corporate clientele an unmatched selection of exclusive, highly allocated items for every level of event. Our experts will work closely with you to curate a collection of fine wine and spirits specially tailored for your executives and employee events." ,shouldAnimate:false },
        { id: 3, title: "What We Offer" , desc:" Personalized menu planning and pairings using our extensive distribution partners. Highly allocated products from prestigious estates worldwide. White glove delivery service for all events in the United States. Easy automated ordering process (saving planners time & money). Convenient NYC locations just minutes from Manhattan ",shouldAnimate:false}
        // { id: 4, title: "Hi " , desc:"",shouldAnimate:false},
        // { id: 5, title: "How are you",desc:"",shouldAnimate:false },
      ].map((image) => (
        <Image 
        id={image.id} 
        title={image.title} 
        desc={image.desc}
        shouldAnimate={image.shouldAnimate}
        />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}
