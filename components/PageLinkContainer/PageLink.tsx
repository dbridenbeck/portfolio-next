import { AnimatePresence } from "framer-motion";
import PageLinkModel from "../../models/pageLink";
import PageLinkAnimation from "../../animations/PageLinkAnimation";

const PageLink: React.FC<PageLinkModel> = ({ onHelloPage }) => (
  <>
    {/* 
      onHelloPage & !onHelloPage used to add/remove from DOM
      which triggers AnimatePresence to fire animation
    */}
    <AnimatePresence initial={false}>
      {onHelloPage && (
        <span className="pageLink blue">
          <PageLinkAnimation>about</PageLinkAnimation>
        </span>
      )}
    </AnimatePresence>
    <AnimatePresence initial={false}>
      {!onHelloPage && (
        <span className="pageLink red">
          <PageLinkAnimation>hello</PageLinkAnimation>
        </span>
      )}
    </AnimatePresence>

    <style jsx>{`
      .pageLink {
        position: absolute;
        display: block;
        right: 60px;
        font-size: 0.9em;
        font-style: italic;
        cursor: pointer;
      }

      .linkText {
        position: absolute;
        display: inline;
        z-index: 99;
      }
    `}</style>
  </>
);

export default PageLink;