import styled, { keyframes } from 'styled-components';
import { devices } from "../../utils/cssBreakpoints";
import ImageModel from '../../models/images';

const rotate = keyframes`
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-120px) rotate(-65deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
`;

const StyledRollerskateImage = styled.img`
  display: block;
  position: absolute;
  margin: 30vh 0 0 0;
  width: 35%;
  animation: ${rotate} 80s infinite linear;
  animation-delay: 400ms;
  opacity: 0.15;
  @media ${devices.mobileLandscape} {
    width: 25%;
    margin: 32.5vh 0 0 0;
  }
`;

const RollerskateImage: React.FC<ImageModel> = ({
  currentPage,
  pageClickedOnce,
}) => (
  <picture>
    <source
      srcSet={require("../../public/images/rollerskate.png?webp")}
      type="image/webp"
    />
    <source
      srcSet={require("../../public/images/rollerskate.png")}
      type="image/jpeg"
    />
    <StyledRollerskateImage
      currentPage={currentPage}
      pageClickedOnce={pageClickedOnce}
      src={require("../../public/images/rollerskate.png")}
      alt="A quad rollerskate"
    />
  </picture>
);

export default RollerskateImage;
