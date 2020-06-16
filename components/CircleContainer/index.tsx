import styled from "styled-components";
import Circle from "./Circle";
import { ProjectModel } from "../../models/appState";

const CircleContainerDiv = styled.div`
  position: relative;
  height: 28vh;
  width: ${({ areAllProjectsClosed }) =>
    areAllProjectsClosed ? "100%" : "28vh"};
  margin: 0 auto;
  transition: width 0.75s;
`;

interface CircleContainerProps {
  currentPage: string;
  pageClickedOnce: boolean;
  projects: ProjectModel[];
}

const CircleContainer: React.FC<CircleContainerProps> = ({
  currentPage,
  pageClickedOnce,
  projects,
}) => {
  
  // To Tyler: This is how I'm determining if a project is opened or not
  // it controls the width of the circle, and passes the result into Circle
  const findOpenedProject = projects.find(project => project.open);

  return (
    <CircleContainerDiv areAllProjectsClosed={findOpenedProject}>
      <Circle
        currentPage={currentPage}
        pageClickedOnce={pageClickedOnce}
        projects={projects}
        openProject={findOpenedProject}
      />
    </CircleContainerDiv>
  );
};

export default CircleContainer;
