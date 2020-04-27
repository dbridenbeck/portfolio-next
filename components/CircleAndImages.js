import { motion, AnimatePresence } from "framer-motion";
import Circle from "../components/Circle";
import LeftImage from "../components/LeftImage";
import RightImage from "../components/RightImage";

const CircleAndImages = ({ onHelloPage }) => (
  <>
    <div className="circleAndImages-container">
      <LeftImage onHelloPage={onHelloPage} />
      <RightImage onHelloPage={onHelloPage} />
      <Circle onHelloPage={onHelloPage} />
    </div>
    <style jsx>{`
      .circleAndImages-container {
        display: block;
        position: relative;
        width: 360px;
        height: 360px;
        margin: 0 auto;
      }

      @media screen and (min-width: 1270px) {
        .circleAndImages-container {
          width: 360px;
          height: 360px;
        }
      }
      
      @media screen and (min-width: 1800px) {
        .circleAndImages-container {
          width: 600px;
          height: 600px;
        }
      }
    `}</style>
  </>
);

export default CircleAndImages;
