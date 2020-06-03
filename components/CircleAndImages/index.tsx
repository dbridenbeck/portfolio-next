import styled from "styled-components";
import Circle from "./Circle";
import ImagePairs from "./ImagePairs";

const CircleAndImagesContainer = styled.div`
  display: block;
  position: relative;
  width: 360px;
  height: 360px;
  max-width: 50vh;
  max-height: 50vh;
  margin: 0 auto;

  @media screen and (min-width: 1270px) {
    width: 400px;
    height: 400px;
    max-width: 400px;
    max-height: 400px;
  }

  @media screen and (min-width: 1400px) {
    width: 600px;
    height: 600px;
    max-width: 600px;
    max-height: 600px;
  }
`;

interface CircleAndImagesProps {
  onHelloPage: boolean;
  pageClickedOnce: boolean;
}

const CircleAndImages: React.FC<CircleAndImagesProps> = ({
  onHelloPage,
  pageClickedOnce,
}) => (
  <CircleAndImagesContainer>
    <ImagePairs leftOriented={true} onHelloPage={onHelloPage} />
    <ImagePairs leftOriented={false} onHelloPage={onHelloPage} />
    <Circle onHelloPage={onHelloPage} pageClickedOnce={pageClickedOnce} />
  </CircleAndImagesContainer>
);

export default CircleAndImages;
