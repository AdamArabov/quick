import { Logo } from "./logo";
import { Logo2 } from "./logo2";

export function Footer({ title = "" }) {
  return (
    <footer>
      <a href="https://www.linkedin.com/company/promenade-wine-spirits/" target="_blank" rel="noreferrer">
        <Logo />
      </a>
      <a href="https://www.instagram.com/promenadewines/" target="_blank" rel="noreferrer"> {/* Add the new link */}
         <Logo2/>
      </a>
      <a
        href="https://www.framer.com/docs/scroll-animations/"
        target="_blank"
        rel="noreferrer"
      >
        <code>{title}</code>
      </a>
    </footer>
  );
}

