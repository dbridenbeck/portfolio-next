import styled from "styled-components";
import { motion } from "framer-motion";
import CircleAnimation from "../../animations/CircleAnimation";
import { ProjectModel } from "../../models/appState";
import { devices } from '../../utils/cssBreakpoints';

const StyledCircle = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  border-radius: 10000px;
  overflow: hidden;
  transition: background-color 0.5s;
  background-color: ${({ color }) =>
    color === "grey" ? "#4A505F" : color === "yellow" ? "#F9E44D" : color === "reddish" ? "#883B38" : "white"};
`;

const StyledVideo = styled(motion.video)`
  position: relative;
  display: block;
  height: 100%;
  margin: 0 auto;
  @media ${devices.mobileLandscape} {
    position: absolute;
    height: auto;
    bottom: 0;
  }
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
          <StyledVideo
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            key={openProject.title}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <source src={openProject.webm} type="video/webm" />
            <source src={openProject.mp4} type="video/mp4" />
          </StyledVideo>
        )}
      </StyledCircle>
    </CircleAnimation>
  );
};
export default Circle;
