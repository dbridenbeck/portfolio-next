import styled from 'styled-components';
import { AnimatePresence } from "framer-motion";
import PageLinkModel from "../../models/pageLink";
import PageLinkAnimation from "../../animations/PageLinkAnimation";

const PageLinkSpan = styled.span`
  position: absolute;
  display: block;
  right: 60px;
  font-size: 0.9em;
  font-style: italic;
  cursor: pointer;
  color: ${({ color }) => (color === "red" ? "#d13b40" : "#3bc9d1")};
`;

const PageLink: React.FC<PageLinkModel> = ({ onHelloPage }) => (
  <>
    {/* 
      onHelloPage & !onHelloPage used to add/remove from DOM
      which triggers AnimatePresence to fire animation
    */}
    <AnimatePresence initial={false}>
      {onHelloPage && (
        <PageLinkSpan color="blue">
          <PageLinkAnimation>about</PageLinkAnimation>
        </PageLinkSpan>
      )}
    </AnimatePresence>
    <AnimatePresence initial={false}>
      {!onHelloPage && (
        <PageLinkSpan color="red">
          <PageLinkAnimation>hello</PageLinkAnimation>
        </PageLinkSpan>
      )}
    </AnimatePresence>
  </>
);

export default PageLink;