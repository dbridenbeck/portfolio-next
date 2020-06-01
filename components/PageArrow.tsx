import { AnimatePresence } from "framer-motion";
import PageLinkModel from "../models/pageLink";
import ArrowAnimation from '../animations/ArrowAnimation';


const PageArrow: React.FC<PageLinkModel> = ({ onHelloPage }) => (
  <>
    <AnimatePresence initial={false}>
      {onHelloPage && (
        <span className="arrow red">
          <ArrowAnimation>{"-->"}</ArrowAnimation>
        </span>
      )}
    </AnimatePresence>
    <AnimatePresence initial={false}>
      {!onHelloPage && (
        <span className="arrow blue">
          <ArrowAnimation>{"-->"}</ArrowAnimation>
        </span>
      )}
    </AnimatePresence>

    <style jsx>{`
      .arrow {
        position: absolute;
        display: block;
        right: 30px;
        width: 25px;
        font-size: 0.9em;
        font-style: italic;
        cursor: pointer;
      }
    `}</style>
  </>
);

export default PageArrow;
