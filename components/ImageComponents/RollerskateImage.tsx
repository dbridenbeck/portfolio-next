import styled, { keyframes } from 'styled-components';
import triggerFilter from '../../animations/TriggerFilter';
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
  margin: 25% 0 0 0;
  width: 90%;
  animation: ${rotate} 80s infinite linear;
  animation-delay: 400ms;
  transition: ${({ pageClickedOnce, projectHoveredIndex }) =>
    pageClickedOnce || projectHoveredIndex !== -1 ? "filter 2s" : ""};
  filter: ${({ currentPage, projectHoveredIndex }) =>
    triggerFilter(currentPage, projectHoveredIndex)};
`;

const RollerskateImage: React.FC<ImageModel> = ({
  currentPage,
  pageClickedOnce,
  projectHoveredIndex,
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
      projectHoveredIndex={projectHoveredIndex}
      src={require("../../public/images/rollerskate.png")}
      alt="A quad rollerskate"
    />
  </picture>
);

export default RollerskateImage;
