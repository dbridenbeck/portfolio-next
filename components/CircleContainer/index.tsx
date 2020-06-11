import styled from "styled-components";
import Circle from "./Circle";
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
  projectHoveredIndex: number;
  projects: ProjectModel[];
}

const CircleContainer: React.FC<CircleContainerProps> = ({
  currentPage,
  pageClickedOnce,
  projects,
  projectHoveredIndex,
}) => (
  <CircleContainerDiv projectHoveredIndex={projectHoveredIndex}>
    <Circle
      currentPage={currentPage}
      pageClickedOnce={pageClickedOnce}
      projects={projects}
      projectHoveredIndex={projectHoveredIndex}
    />
  </CircleContainerDiv>
);

export default CircleContainer;
