import styled, { keyframes } from "styled-components";
import { devices } from "../../utils/cssBreakpoints";
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
  width: 50%;
  margin: 25vh 0 0 -20%;
  animation: ${rotate} 90s infinite linear;
  animation-delay: 200ms;
  opacity: 0.15;
  @media ${devices.mobileLandscape} {
    width: 32.5%;
    margin: 30vh 0 0 -5%;
  }
`;

const ComputerImage: React.FC<ImageModel> = ({
  currentPage,
  pageClickedOnce,
  projectHoveredIndex,
}) => (
  <picture>
    <source
      srcSet={require("../../public/images/computer.png?webp")}
      type="image/webp"
    />
    <source
      srcSet={require("../../public/images/computer.png")}
      type="image/png"
    />
    <StyledComputerImage
      currentPage={currentPage}
      pageClickedOnce={pageClickedOnce}
      projectHoveredIndex={projectHoveredIndex}
      srcSet={require("../../public/images/computer.png")}
      alt="An open laptop"
    />
  </picture>
);

export default ComputerImage;
