import { motion, AnimatePresence } from "framer-motion";

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
  <div className="right-image-container">
    <AnimatePresence initial={false}>
      {onHelloPage && (
        <motion.div
          initial="flyIn"
          animate="center"
          exit="flyOut"
          variants={rightImageVariant}
        >
          <img className="phone" src="/images/phone.png" alt="An open laptop" />
        </motion.div>
      )}
    </AnimatePresence>
    <AnimatePresence initial={false}>
      {!onHelloPage && (
        <motion.div
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
        </motion.div>
      )}
    </AnimatePresence>
    <style jsx>{`
      .right-image-container {
        display: block;
        position: relative;
        z-index: 5;
      }

      .phone {
        display: block;
        position: absolute;
        margin: 80px 0px 0px 200px;
        width: 70%;
        height: auto;
        animation: rotatePhone 50s infinite linear;
      }

      .rollerskate {
        display: block;
        position: absolute;
        margin: 80px 0px 0px 200px;
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

      @media screen and (min-width: 1270px) {
        .phone {
          margin: 60px 0px 0px 300px;
          width: 45%;
        }

        .rollerskate {
          margin: 60px 0px 0px 300px;
          width: 40%;
        }
      }
    `}</style>
  </div>
);

export default RightImage;
