import styled from 'styled-components';
import { AnimatePresence } from "framer-motion";
import PageLinkModel from "../../models/pageLink";
import ArrowAnimation from '../../animations/ArrowAnimation';

const ArrowWrapper = styled.span`
  position: absolute;
  display: block;
  right: 30px;
  width: 25px;
  font-size: 0.9em;
  font-style: italic;
  cursor: pointer;
`;

const PageArrow: React.FC<PageLinkModel> = ({ onHelloPage }) => (
  <>
  {/* 
      onHelloPage & !onHelloPage used to add/remove from DOM
      which triggers AnimatePresence to fire animation
  */}
    <AnimatePresence initial={false}>
      {onHelloPage && (
        <ArrowWrapper className="arrow red">
          <ArrowAnimation>{"-->"}</ArrowAnimation>
        </ArrowWrapper>
      )}
    </AnimatePresence>
    <AnimatePresence initial={false}>
      {!onHelloPage && (
        <ArrowWrapper className="arrow blue">
          <ArrowAnimation>{"-->"}</ArrowAnimation>
        </ArrowWrapper>
      )}
    </AnimatePresence>
  </>
);

export default PageArrow;
