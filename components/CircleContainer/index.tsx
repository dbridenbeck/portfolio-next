import styled from "styled-components";
import Circle from "./Circle";
import { ProjectModel } from "../../models/appState";

const CircleContainerDiv = styled.div`
  position: relative;
  height: 28vh;
  width: ${({ areAllProjectsClosed }) =>
    areAllProjectsClosed ? "28vh" : "100%"};
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
  const areAllProjectsClosed = projects.every(project => project.open === false);
  return (
    <CircleContainerDiv areAllProjectsClosed={areAllProjectsClosed}>
      <Circle
        currentPage={currentPage}
        pageClickedOnce={pageClickedOnce}
        projects={projects}
      />
    </CircleContainerDiv>
  );
};

export default CircleContainer;
