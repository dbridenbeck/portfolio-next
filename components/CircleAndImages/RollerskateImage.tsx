import styled, { keyframes } from 'styled-components';
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
  margin: 25% 0px 0px 50%;
  width: 45%;
  animation: ${rotate} 80s infinite linear;
  animation-delay: 400ms;
  transition: filter 0.5s;
`;

const RollerskateImage: React.FC<ImageModel> = ({ onHelloPage }) =>
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
      className={`rollerskate ${onHelloPage ? "blueFilter" : "redFilter"}`}
      src={require("../../public/images/rollerskate.png")}
      alt="A quad rollerskate"
    />
  </picture>

export default RollerskateImage;
