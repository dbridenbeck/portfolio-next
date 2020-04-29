import Circle from "../components/Circle";
import Images from "../components/Images";

const CircleAndImages = ({ onHelloPage, pageClickedOnce }) => (
  <>
    <div className="circleAndImages-container">
      <Images leftOriented={true} onHelloPage={onHelloPage} />
      <Images leftOriented={false} onHelloPage={onHelloPage} />
      <Circle onHelloPage={onHelloPage} pageClickedOnce={pageClickedOnce} />
    </div>
    <style jsx>{`
      .circleAndImages-container {
        display: block;
        position: relative;
        width: 360px;
        height: 360px;
        margin: 2.5% auto 0 auto;
      }

      @media screen and (min-width: 1270px) {
        .circleAndImages-container {
          width: 400px;
          height: 400px;
        }
      }

      @media screen and (min-width: 1400px) {
        .circleAndImages-container {
          width: 600px;
          height: 600px;
        }
      }
    `}</style>
  </>
);

export default CircleAndImages;
