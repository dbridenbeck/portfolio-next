import styled from "styled-components";
import CircleAnimation from "../../animations/CircleAnimation";
import { ProjectModel } from "../../models/appState";

const StyledCircle = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-radius: 10000px;
  overflow: hidden;
  transition: ${({ pageClickedOnce }) =>
    pageClickedOnce ? "background-color 0.75s" : ""};
  background-color: ${({ color }) =>
    color === "grey" ? "#4A505F" : color === "yellow" ? "#F9E44D" : "#883B38"};
`;

const StyledGif = styled.video`
  position: absolute;
  height: 70%;
  width: 70%;
  left: 15%;
  top: 15%;
  opacity: ${({ isSelected }) => (isSelected ? "1" : "0")};
  transition: opacity 0.5s ease-in-out;
`;

interface CircleProps {
  currentPage: string;
  pageClickedOnce: boolean;
  projects: ProjectModel[];
}

const Circle: React.FC<CircleProps> = ({
  currentPage,
  pageClickedOnce,
  projects,
}) => {
    const projectOpen = projects.reduce((openedProject, currProject) => {
      return currProject.open ? (openedProject = currProject) : openedProject;
    }, {});
    console.log(projectOpen);
  return (
    <CircleAnimation
      currentPage={currentPage}
      pageClickedOnce={pageClickedOnce}
    >
      <StyledCircle
        color={
          currentPage === "skills"
            ? "grey"
            : currentPage === "about"
            ? "yellow"
            : "reddish"
        }
        pageClickedOnce={pageClickedOnce}
        currentPage={currentPage}
        projects={projects}
      ></StyledCircle>
    </CircleAnimation>
  )
};
export default Circle;
