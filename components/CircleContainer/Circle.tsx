import styled from "styled-components";
import CircleAnimation from "../../animations/CircleAnimation";
import { ProjectModel } from "../../models/appState";

const StyledCircle = styled.div`
  position: relative;
  display: block;
  width: 80%;
  /* padding-bottom keeps circle proportional */
  padding-bottom: 77.75%;
  margin: 0 auto;
  border-radius: 50%;
border: ${({ projectHoveredIndex, projects }) => projectHoveredIndex === -1 ? `5px solid wheat` : `5px solid ${projects[projectHoveredIndex].color}`};
  overflow: hidden;
  transition: border-color 0.75s ease-in-out;
  transition: ${({ pageClickedOnce }) =>
    pageClickedOnce ? "background-color 0.3s" : ""};
  background-color: ${({ color }) => (color === "red" ? "#d13b40" : color === "blue" ? "#3bc9d1" : "#fff")};
  @media screen and (min-width: 768px) {
    width: 100%;
    padding-bottom: 97.75%;
  }
`;

const StyledGif = styled.img`
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
  projectHoveredIndex: number;
  projects: ProjectModel[];
}

const Circle: React.FC<CircleProps> = ({
  currentPage,
  pageClickedOnce,
  projects,
  projectHoveredIndex,
}) => (
  <CircleAnimation currentPage={currentPage} pageClickedOnce={pageClickedOnce}>
    <StyledCircle
      color={
        currentPage === "SKILLS"
          ? "red"
          : currentPage === "ABOUT"
          ? "blue"
          : "white"
      }
      pageClickedOnce={pageClickedOnce}
      currentPage={currentPage}
      projects={projects}
      projectHoveredIndex={projectHoveredIndex}
    >
      <StyledGif
        isSelected={projectHoveredIndex === 0}
        src="/images/whidbeyherbal.gif"
      />
      <StyledGif
        isSelected={projectHoveredIndex === 1}
        src="/images/chatapp.gif"
      />
      <StyledGif
        isSelected={projectHoveredIndex === 2}
        src="/images/taskmanager.gif"
      />
    </StyledCircle>
  </CircleAnimation>
);

export default Circle;
