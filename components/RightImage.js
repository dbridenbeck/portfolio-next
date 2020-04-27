import { motion } from "framer-motion";
import { css } from "styled-jsx/css";

// control styles fro motion.div's
const { className, styles } = css.resolve`
  div {
    display: block;
    position: relative;
    width: 100%;
    z-index: 5;
  }
`;

const rightImageVariant = {
  center: {
    x: "0",
    transition: {
      type: "spring",
      stiffness: 35,
      mass: 0.2,
      damping: 3.5,
    },
  },
  flyOut: {
    x: "75%",
    transition: {
      type: "spring",
      stiffness: 35,
    },
  },
};

const RightImage = ({ onHelloPage }) => (
  <>
    <motion.div
      className={className}
      initial="flyIn"
      animate={onHelloPage ? "center" : "flyOut"}
      exit="flyOut"
      variants={rightImageVariant}
    >
      <img
        className={`phone ${onHelloPage ? "red" : "blue"}`}
        src="/images/phone.png"
        alt="An 80's style mobile phone"
      />
      {styles}
    </motion.div>
    <motion.div
      className={className}
      initial={false}
      animate={!onHelloPage ? "center" : "flyOut"}
      exit="flyOut"
      variants={rightImageVariant}
    >
      <img
        className="rollerskate"
        src="/images/rollerskate.png"
        alt="An quad roller skate"
      />
      {styles}
    </motion.div>
    <style jsx>{`
      .phone {
        display: block;
        position: absolute;
        margin: 25% 0px 0px 50%;
        width: 70%;
        height: auto;
        animation: rotatePhone 50s infinite linear;
        transition: border 1s;
      }

      .rollerskate {
        display: block;
        position: absolute;
        margin: 25% 0px 0px 50%;
        width: 55%;
        animation: rotateRollerskate 40s infinite linear;
      }

      .blueFilter {
        filter: invert(93%) sepia(91%) saturate(6659%) hue-rotate(158deg)
          brightness(105%) contrast(105%);
      }

      .greenFilter {
        filter: invert(88%) sepia(17%) saturate(972%) hue-rotate(39deg)
          brightness(102%) contrast(106%);
      }

      @keyframes rotatePhone {
        0% {
          transform: translateY(0px) rotate(0deg);
        }
        50% {
          transform: translateY(-120px) rotate(-45deg);
        }
        80% {
          transform: translateY(60px) rotate(5deg);
        }
        100% {
          transform: translateY(0px) rotate(0deg);
        }
      }

      @keyframes rotateRollerskate {
        0% {
          transform: translateY(0px) rotate(0deg);
        }
        50% {
          transform: translateY(80px) rotate(-75deg);
        }
        80% {
          transform: translateY(20px) rotate(-5deg);
        }
        100% {
          transform: translateY(0px) rotate(0deg);
        }
      }
    `}</style>
  </>
);

export default RightImage;
