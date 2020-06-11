import styled, { keyframes } from 'styled-components';
import { devices } from "../../utils/cssBreakpoints";
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
  margin: 28vh 0 0 -7.5%;
  width: 32.5%;
  animation: ${rotate} 80s infinite linear;
  animation-delay: 100ms;
  opacity: 0.15;
  @media ${devices.mobileLandscape} {
    width: 22.5%;
    margin: 30vh 0 0 0;
  }
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
