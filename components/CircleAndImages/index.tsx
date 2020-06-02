import Circle from "./Circle";
import ImagePairs from "./ImagePairs";

interface CircleAndImagesProps {
  onHelloPage: boolean;
  pageClickedOnce: boolean;
}

const CircleAndImages: React.FC<CircleAndImagesProps> = ({
  onHelloPage,
  pageClickedOnce,
}) => {
  return (
    <>
      <div className="circleAndImages-container">
        <ImagePairs leftOriented={true} onHelloPage={onHelloPage} />
        <ImagePairs leftOriented={false} onHelloPage={onHelloPage} />
        <Circle onHelloPage={onHelloPage} pageClickedOnce={pageClickedOnce} />
      </div>
      <style jsx>{`
        .circleAndImages-container {
          display: block;
          position: relative;
          width: 360px;
          height: 360px;
          max-width: 50vh;
          max-height: 50vh;
          margin: 0 auto;
        }

        @media screen and (min-width: 1270px) {
          .circleAndImages-container {
            width: 400px;
            height: 400px;
            max-width: 400px;
            max-height: 400px;
          }
        }

        @media screen and (min-width: 1400px) {
          .circleAndImages-container {
            width: 600px;
            height: 600px;
            max-width: 600px;
            max-height: 600px;
          }
        }
      `}</style>
    </>
  );
};

export default CircleAndImages;
