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
      width: 87%;
      height: 49%;
      margin: 0 auto;
    }
    `}</style>
  </>
);

export default CircleAndImages;
