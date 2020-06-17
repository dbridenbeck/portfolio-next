import styled from "styled-components";
import Video from './Video';
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
  background-color: ${({ color }) =>
    color === "grey"
      ? "#4A505F"
      : color === "yellow"
      ? "#F9E44D"
      : color === "reddish"
      ? "#883B38"
      : "white"};
  transition: background-color 0.5s;
  transform: translate3d(0, 0, 0);
  z-index: 5;
`;

interface CircleProps {
  currentPage: string;
  pageClickedOnce: boolean;
  projects: ProjectModel[];
  openProject: ProjectModel;
}

const Circle: React.FC<CircleProps> = ({
  currentPage,
  pageClickedOnce,
  projects,
  openProject,
}) => {
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
            : openProject
            ? "white"
            : "reddish"
        }
        pageClickedOnce={pageClickedOnce}
        currentPage={currentPage}
        projects={projects}
      >
        {openProject && (
          <Video openProject={openProject} />
        )}

        {/* Calling the thumb files here to pre-load them so they are ready when a project is opened */}
        {projects.map(project => <img style={{display: "none"}} src={project.thumb} alt={project.thumbAlt} key={project.thumb}/>)}
      </StyledCircle>
    </CircleAnimation>
  );
};
export default Circle;
