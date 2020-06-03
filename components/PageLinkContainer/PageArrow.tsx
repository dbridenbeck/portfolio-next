import styled from 'styled-components';
import { AnimatePresence } from "framer-motion";
import PageLinkModel from "../../models/pageLink";
import ArrowAnimation from '../../animations/ArrowAnimation';

const ArrowSpan = styled.span`
  position: absolute;
  display: block;
  right: 30px;
  font-size: 0.9em;
  font-style: italic;
  cursor: pointer;
  color: ${({ color }) => (color === "red" ? "#d13b40" : "#3bc9d1")};
`;

const PageArrow: React.FC<PageLinkModel> = ({ onHelloPage }) => (
  <>
    {/* 
      onHelloPage & !onHelloPage used to add/remove from DOM
      which triggers AnimatePresence to fire animation
  */}
    <AnimatePresence initial={false}>
      {onHelloPage && (
        <ArrowSpan color={"red"}>
          <ArrowAnimation>{"-->"}</ArrowAnimation>
        </ArrowSpan>
      )}
    </AnimatePresence>
    <AnimatePresence initial={false}>
      {!onHelloPage && (
        <ArrowSpan color={"blue"}>
          <ArrowAnimation>{"-->"}</ArrowAnimation>
        </ArrowSpan>
      )}
    </AnimatePresence>
  </>
);

export default PageArrow;
