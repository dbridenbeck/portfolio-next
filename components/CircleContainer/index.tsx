import styled from "styled-components";
import Circle from "./Circle";
import { ReactElement } from "react";

const CircleContainerDiv = styled.div`
  display: block;
  position: relative;
  width: 360px;
  height: 360px;
  max-width: 50vh;
  max-height: 50vh;
  margin: 0 auto;

  @media screen and (min-width: 1270px) {
    width: 400px;
    height: 400px;
    max-width: 400px;
    max-height: 400px;
  }

  @media screen and (min-width: 1400px) {
    width: 600px;
    height: 600px;
    max-width: 600px;
    max-height: 600px;
  }
`;

interface CircleContainerProps {
  onHelloPage: boolean;
  pageClickedOnce: boolean;
  children: ReactElement[];
}

const CircleContainer: React.FC<CircleContainerProps> = ({
  onHelloPage,
  pageClickedOnce,
  children
}) => (
  <CircleContainerDiv>
    {children}
    <Circle onHelloPage={onHelloPage} pageClickedOnce={pageClickedOnce} />
  </CircleContainerDiv>
);

export default CircleContainer;
