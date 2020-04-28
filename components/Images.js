import { motion } from "framer-motion";
import { css } from "styled-jsx/css";
import PhoneImage from './PhoneImage';
import ComputerImage from './ComputerImage';
import PinballImage from './PinballImage';
import RollerskateImage from './RollerskateImage';

// control styles fro motion.div's
const { className, styles } = css.resolve`
  div {
    display: block;
    position: relative;
    z-index: 5;
    width: 100%;
  }
`;

const imageVariants = {
  center: {
    x: "0px",
    transition: {
      type: "spring",
      stiffness: 35,
      mass: 0.2,
      damping: 3.5,
    },
  },
  flyOut: (leftOriented) => ({
    x: leftOriented ? "-75%" : "75%",
    transition: {
      type: "spring",
      stiffness: 35,
    }
  }),
};

const Images = ({ leftOriented, onHelloPage }) => {
  return (
    <>
      <motion.div
        className={className}
        initial="flyIn"
        animate={onHelloPage ? "center" : "flyOut"}
        custom={leftOriented}
        variants={imageVariants}
      >
        {leftOriented ? (
          <ComputerImage onHelloPage={onHelloPage} />
        ) : (
          <PhoneImage onHelloPage={onHelloPage} />
        )}
        {styles}
      </motion.div>

      <motion.div
        className={className}
        initial={false}
        animate={!onHelloPage ? "center" : "flyOut"}
        custom={leftOriented}
        variants={imageVariants}
      >
        {leftOriented ? (
          <PinballImage onHelloPage={onHelloPage} />
        ) : (
          <RollerskateImage onHelloPage={onHelloPage} />
        )}

        {styles}
      </motion.div>
      <style jsx>{`
        .computer {
          display: block;
          position: absolute;
          margin: 25% 0 0 0;
          width: 55%;
          animation: rotateComputer 50s infinite linear;
          transition: filter 0.5s;
        }

        .pinball {
          display: block;
          position: absolute;
          margin: 25% 0 0 0;
          width: 55%;
          animation: rotatePinball 40s infinite linear;
          transition: filter 0.5s;
        }

        .blueFilter {
          filter: invert(93%) sepia(91%) saturate(6659%) hue-rotate(158deg)
            brightness(105%) contrast(105%);
        }

        .greenFilter {
          filter: invert(88%) sepia(17%) saturate(972%) hue-rotate(39deg)
            brightness(102%) contrast(106%);
        }

        @keyframes rotateComputer {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          15% {
            transform: rotate(-5deg);
          }
          50% {
            transform: translateY(60px) rotate(45deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        @keyframes rotatePinball {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          35% {
            transform: translateY(-80px) rotate(40deg);
          }
          65% {
            transform: translateY(60px) rotate(-10deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }
      `}</style>
    </>
  );
}

export default Images;
