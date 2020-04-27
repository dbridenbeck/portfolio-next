import { motion, AnimatePresence } from "framer-motion";
import { css } from "styled-jsx/css";

// control styles fro motion.div's
const { className, styles } = css.resolve`
  div {
    display: block;
    position: relative;
    z-index: 5;
    width: 100%;
  }
`;

const leftImageVariant = {
  center: { x: "0px"},
  flyOut: {
    x: "-350px",
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
};

const LeftImage = ({ onHelloPage }) => (
  <>
    <motion.div
      className={className}
      initial="flyIn"
      animate={onHelloPage ? "center" : "flyOut"}
      exit="flyOut"
      variants={leftImageVariant}
    >
      <img
        className="computer"
        src="/images/computer.png"
        alt="An open laptop"
      />
      {styles}
    </motion.div>

    <motion.div
      className={className}
      initial={false}
      animate={!onHelloPage ? "center" : "flyOut"}
      exit="flyOut"
      variants={leftImageVariant}
    >
      <img
        className="pinball"
        src="/images/pinball.png"
        alt="An pinball table"
      />
      {styles}
    </motion.div>
    <style jsx>{`
      .computer {
        display: block;
        position: absolute;
        margin: 25% 0 0 0;
        width: 55%;
        animation: rotateComputer 50s infinite linear;
      }

      .pinball {
        display: block;
        position: absolute;
        margin: 25% 0 0 0;
        width: 55%;
        animation: rotatePinball 40s infinite linear;
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

export default LeftImage;
