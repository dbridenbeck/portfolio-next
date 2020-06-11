import styled from "styled-components";
import Circle from "./Circle";
import { ProjectModel } from "../../models/appState";

const CircleContainerDiv = styled.div`
  position: relative;
  height: 28vh;
  width: ${({ projectSelectedIndex }) =>
    projectSelectedIndex !== -1 ? "100%" : "28vh"};
  margin: 0 auto;
  transition: width 0.75s;
`;

interface CircleContainerProps {
  currentPage: string;
  pageClickedOnce: boolean;
  projectSelectedIndex: number;
  projects: ProjectModel[];
}

const CircleContainer: React.FC<CircleContainerProps> = ({
  currentPage,
  pageClickedOnce,
  projects,
  projectSelectedIndex,
}) => (
  <CircleContainerDiv projectSelectedIndex={projectSelectedIndex}>
    <Circle
      currentPage={currentPage}
      pageClickedOnce={pageClickedOnce}
      projects={projects}
    />
  </CircleContainerDiv>
);

export default CircleContainer;
