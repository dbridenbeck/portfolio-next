import { motion, AnimatePresence } from "framer-motion";

const circleVariants = {
  hello: { scale: [null, .95, 1.05, .975, 1.025, .985, 1] },
  about: { scale: [null, .95, 1.05, .975, 1.025, .985, 1] },
};

const Circle = ({ onHelloPage }) => (
  <>
    <div className="circle-container">
      <>
        <motion.div
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
        z-index: 1;
      }

      .circle {
        position: relative;
        display: block;
        height: 360px;
        width: 360px;
        border-radius: 50%;
        transition: all .3s;
        z-index: 1;
      }

      .green {
        background-color: #c5ff8a;
      }

      .blue {
        background-color: #8affff;
      }
    `}</style>
  </>
);

export default Circle;
