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
    width: 375px;
    height: 375px;
    max-width: 375px;
    max-height: 375px;
  }

  @media screen and (min-width: 1400px) {
    width: 575px;
    height: 575px;
    max-width: 575px;
    max-height: 575px;
  }
`;

interface CircleContainerProps {
  currentPage: string;
  pageClickedOnce: boolean;
  children: ReactElement[];
}

const CircleContainer: React.FC<CircleContainerProps> = ({
  currentPage,
  pageClickedOnce,
  children
}) => (
  <CircleContainerDiv>
    {children}
    <Circle currentPage={currentPage} pageClickedOnce={pageClickedOnce} />
  </CircleContainerDiv>
);

export default CircleContainer;
