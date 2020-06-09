import styled from "styled-components";
import Circle from "./Circle";
import { ReactElement } from "react";
import { ProjectModel } from "../../models/appState";

const CircleContainerDiv = styled.div`
  display: block;
  position: relative;
  width: 50%;
  margin: 0 auto;
`;

interface CircleContainerProps {
  currentPage: string;
  pageClickedOnce: boolean;
  children: ReactElement[];
  projectHoveredIndex: number;
  projects: ProjectModel[];
}

const CircleContainer: React.FC<CircleContainerProps> = ({
  currentPage,
  pageClickedOnce,
  children,
  projects,
  projectHoveredIndex
}) => (
  <CircleContainerDiv>
    {children}
    <Circle 
      currentPage={currentPage} 
      pageClickedOnce={pageClickedOnce} 
      projects={projects}
      projectHoveredIndex={projectHoveredIndex}
    />
  </CircleContainerDiv>
);

export default CircleContainer;
