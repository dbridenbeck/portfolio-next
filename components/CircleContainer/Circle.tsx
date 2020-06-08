import styled from "styled-components";
import CircleAnimation from "../../animations/CircleAnimation";
import { ProjectModel } from "../../models/appState";

const StyledCircle = styled.div`
  position: relative;
  display: block;
  width: 100%;
  padding-bottom: 100%;
  margin: 0 auto;
  border-radius: 50%;
  transition: ${({ pageClickedOnce }) =>
    pageClickedOnce ? "background-color 0.3s" : ""};
  background-color: ${({ color }) => (color === "red" ? "#d13b40" : "#3bc9d1")};
  ${({ currentPage, projects, projectHoveredIndex }) =>
    currentPage === "PORTFOLIO" && projectHoveredIndex !== -1
      ? `
    background-image: url(${projects[projectHoveredIndex].gif});
    background-size: 80%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-color: white;
    border: 5px solid ${projects[projectHoveredIndex].color};
    transition: border-color 0.75s ease-in-out;
    transition: background-image 0.25s ease-in-out;
  `
      : null}
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
      color={currentPage === "SKILLS" ? "red" : "blue"}
      pageClickedOnce={pageClickedOnce}
      currentPage={currentPage}
      projects={projects}
      projectHoveredIndex={projectHoveredIndex}
    />
  </CircleAnimation>
);

export default Circle;
