import styled, { keyframes } from "styled-components";
import triggerFilter from "../../animations/TriggerFilter";
import ImageModel from "../../models/images";

const rotate = keyframes`
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  75% {
    transform: translateY(-60px) rotate(-25deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
`;

const StyledComputerImage = styled.img`
  display: block;
  position: absolute;
  margin: 25% 0 0 0;
  width: 55%;
  animation: ${rotate} 90s infinite linear;
  animation-delay: 200ms;
  transition: ${({ pageClickedOnce, projectHoveredIndex }) =>
    pageClickedOnce || projectHoveredIndex !== -1 ? "filter 2s" : ""};
  filter: ${({ currentPage, projectHoveredIndex }) =>
    triggerFilter(currentPage, projectHoveredIndex)};
`;

const ComputerImage: React.FC<ImageModel> = ({
  currentPage,
  pageClickedOnce,
  projectHoveredIndex,
}) => (
  <picture>
    <source
      srcSet="images/computer.png?webp"
      type="image/webp"
    />
    <source
      srcSet="images/computer.png"
      type="image/png"
    />
    <StyledComputerImage
      currentPage={currentPage}
      pageClickedOnce={pageClickedOnce}
      projectHoveredIndex={projectHoveredIndex}
      srcSet="/images/computer.png"
      alt="An open laptop"
    />
  </picture>
);

export default ComputerImage;
