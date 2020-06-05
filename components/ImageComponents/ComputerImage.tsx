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
  transition: ${({ pageClickedOnce }) => pageClickedOnce ? "filter 0.5s" : ""};
  filter: ${({ currentPage }) => triggerFilter(currentPage)};
`;

const ComputerImage: React.FC<ImageModel> = ({
  currentPage,
  pageClickedOnce,
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
      srcSet={require("../../public/images/computer.png")}
      alt="An open laptop"
    />
  </picture>
);

export default ComputerImage;