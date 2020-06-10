import styled, { keyframes } from 'styled-components';
import triggerFilter from "../../animations/TriggerFilter";
import ImageModel from "../../models/images";

const rotate = keyframes`
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  35% {
    transform: translateY(-90px) rotate(40deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
`;

const StyledPinballImage = styled.img`
  display: block;
  position: absolute;
  margin: 25% 0 0 5%;
  width: 40%;
  animation: ${rotate} 80s infinite linear;
  animation-delay: 100ms;
  transition: ${({ pageClickedOnce, projectHoveredIndex }) =>
    pageClickedOnce || projectHoveredIndex !== -1 ? "filter 2s" : ""};
  filter: ${({ currentPage, projectHoveredIndex }) =>
    triggerFilter(currentPage, projectHoveredIndex)};
`;

const PinballImage: React.FC<ImageModel> = ({
  currentPage,
  pageClickedOnce,
  projectHoveredIndex
}) => (
  <picture>
    <source
      srcSet={require("../../public/images/pinball.png?webp")}
      type="image/webp"
    />
    <source
      srcSet={require("../../public/images/pinball.png")}
      type="image/png"
    />
    <StyledPinballImage
      currentPage={currentPage}
      pageClickedOnce={pageClickedOnce}
      projectHoveredIndex={projectHoveredIndex}
      srcSet={require("../../public/images/pinball.png")}
      alt="A pinball table"
    />
  </picture>
);

export default PinballImage;
