import styled, { keyframes } from 'styled-components';
import ImageModel from "../../models/images";
import triggerFilter from "../../animations/TriggerFilter";

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
  margin: 25% 0px 0px 60%;
  width: 35%;
  height: auto;
  animation: ${rotate} 90s infinite linear;
  animation-delay: 300ms;
  transition: filter 0.5s;
  filter: ${({ currentPage }) => triggerFilter(currentPage)};
`;

const PhoneImage: React.FC<ImageModel> = ({ currentPage }) =>
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
      srcSet={require("../../public/images/phone.png")}
      alt="An 80's style mobile phone"
    />
  </picture>

export default PhoneImage;
