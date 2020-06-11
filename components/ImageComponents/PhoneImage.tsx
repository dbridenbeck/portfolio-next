import styled, { keyframes } from 'styled-components';
import ImageModel from "../../models/images";
import { devices } from "../../utils/cssBreakpoints";

const rotate = keyframes`
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  80% {
    transform: translateY(60px) rotate(45deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
`;

const StyledPhoneImage = styled.img`
  display: block;
  position: absolute;
  margin: 25vh 0 0 0%;
  width: 32.5%;
  height: auto;
  animation: ${rotate} 90s infinite linear;
  animation-delay: 300ms;
  opacity: 0.15;
  @media ${devices.mobileLandscape} {
    width: 20%;
    margin: 32.5vh 0 0 5%;
  }
`;

const PhoneImage: React.FC<ImageModel> = ({ currentPage, pageClickedOnce, projectHoveredIndex }) => (
  <picture>
    <source
      srcSet={require("../../public/images/phone.png?webp")}
      type="image/webp"
    />
    <source
      srcSet={require("../../public/images/phone.png")}
      type="image/png"
    />
    <StyledPhoneImage
      currentPage={currentPage}
      pageClickedOnce={pageClickedOnce}
      projectHoveredIndex={projectHoveredIndex}
      srcSet={require("../../public/images/phone.png")}
      alt="An 80's style mobile phone"
    />
  </picture>
);

export default PhoneImage;
