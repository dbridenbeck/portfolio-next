import { motion, AnimatePresence } from "framer-motion";

const circleVariants = {
  hello: { scale: [null, .95, 1.05, .975, 1.025, .985, 1] },
  about: { scale: [null, .95, 1.05, .975, 1.025, .985, 1] },
};

const Circle = ({ onHelloPage }) => (
  <>
    <img className="computer" src="/images/computer.png" alt="An open laptop" />
    <img
      className="phone"
      src="/images/phone.png"
      alt="An old brick cell phone from the 8indexToSelect0's"
    />
    <div className="circle-container">
      <>
        <motion.div
          initial="small"
          animate={onHelloPage ? "hello" : "about"}
          exit="large"
          transition={{ ease: "easeInOut", timing: [0, 0.6, 0.8, 0.8, 0.9, 1] }}
          variants={circleVariants}
        >
          <div className={`circle ${onHelloPage ? "green" : "blue"}`}></div>
        </motion.div>
      </>
    </div>
    <style jsx>{`
      .circle-container {
        position: relative;
        display: block;
        height: 360px;
        width: 360px;
        margin: 15% auto 0 auto;
      }

      .circle {
        position: relative;
        display: block;
        height: 360px;
        width: 360px;
        border-radius: 50%;
        transition: all .3s;
      }

      .computer {
        display: block;
        position: absolute;
        left: -2%;
        top: 10%;
        width: 55%;
        animation: rotateCW 100s infinite;
        z-index: 2;
      }

      .phone {
        display: block;
        position: absolute;
        right: -17%;
        top: 7.5%;
        width: 70%;
        animation: rotateCCW 120s infinite;
        z-index: 2;
      }

      .green {
        background-color: #c5ff8a;
      }

      .blue {
        background-color: #8affff;
      }

      @keyframes rotateCW {
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

      @keyframes rotateCCW {
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
    `}</style>
  </>
);

export default Circle;
