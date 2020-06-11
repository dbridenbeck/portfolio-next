import styled from "styled-components";
import Circle from "./Circle";
import { ReactElement } from "react";
import { ProjectModel } from "../../models/appState";

const CircleContainerDiv = styled.div`
  position: relative;
  height: 28vh;
  width: ${({ projectHoveredIndex }) =>
    projectHoveredIndex !== -1 ? "100%" : "28vh"};
  margin: 0 auto;
  transition: width 2s;
`;

interface CircleContainerProps {
  currentPage: string;
  pageClickedOnce: boolean;
  children: ReactElement[];
  projectHoveredIndex: number;
  projects: ProjectModel[];
}

const CircleContainer: React.FC<CircleContainerProps> = ({
  currentPage,
  pageClickedOnce,
  children,
  projects,
  projectHoveredIndex,
}) => (
  <CircleContainerDiv projectHoveredIndex={projectHoveredIndex}>
    {children}
    <Circle
      currentPage={currentPage}
      pageClickedOnce={pageClickedOnce}
      projects={projects}
      projectHoveredIndex={projectHoveredIndex}
    />
  </CircleContainerDiv>
);

export default CircleContainer;
