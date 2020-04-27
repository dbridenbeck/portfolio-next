import { motion, AnimatePresence } from "framer-motion";
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
  flyIn: { x: "350px" },
  center: { x: "0px" },
  flyOut: {
    x: "350px",
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
};

const RightImage = ({ onHelloPage }) => (
  <>
    <AnimatePresence initial={false}>
      {onHelloPage && (
        <motion.div
          className={className}
          initial="flyIn"
          animate="center"
          exit="flyOut"
          variants={rightImageVariant}
        >
          <img className="phone" src="/images/phone.png" alt="An open laptop" />
          {styles}
        </motion.div>
      )}
    </AnimatePresence>
    <AnimatePresence initial={false}>
      {!onHelloPage && (
        <motion.div
          className={className}
          initial="flyIn"
          animate="center"
          exit="flyOut"
          variants={rightImageVariant}
        >
          <img
            className="rollerskate"
            src="/images/rollerskate.png"
            alt="An open laptop"
          />
          {styles}
        </motion.div>
      )}
    </AnimatePresence>
    <style jsx>{`
      .phone {
        display: block;
        position: absolute;
        margin: 25% 0px 0px 50%;
        width: 70%;
        height: auto;
        animation: rotatePhone 50s infinite linear;
      }

      .rollerskate {
        display: block;
        position: absolute;
        margin: 25% 0px 0px 50%;
        width: 55%;
        animation: rotateRollerskate 40s infinite linear;
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
