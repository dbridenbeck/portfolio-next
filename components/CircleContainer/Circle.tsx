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
  projects: ProjectModel[];
}

const Circle: React.FC<CircleProps> = ({
  currentPage,
  pageClickedOnce,
  projects,
}) => (
  <CircleAnimation currentPage={currentPage} pageClickedOnce={pageClickedOnce}>
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
    >
      {/* <StyledGif
        isSelected={projectSelectedIndex === 0}
        src="/images/whidbeyherbal.gif"
      />
      <StyledGif
        isSelected={projectSelectedIndex === 1}
        src="/images/chatapp.gif"
      />
      <StyledGif
        isSelected={projectSelectedIndex === 2}
        src="/images/taskmanager.gif"
      /> */}
    </StyledCircle>
  </CircleAnimation>
);

export default Circle;
