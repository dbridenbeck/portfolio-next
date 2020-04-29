import { motion } from "framer-motion";
import { css } from "styled-jsx/css";

// enable styling for motion.div
const { className, styles } = css.resolve`
  div {
    position: relative;
    display: block;
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }
`;

const circleVariants = {
  hello: { scale: [null, .95, 1.05, .975, 1.025, .985, 1] },
  about: { scale: [null, .95, 1.05, .975, 1.025, .985, 1] },
};

const Circle = ({ onHelloPage, pageClickedOnce }) => {
  return (
    <>
      {/* animate ternary ensures that circle doesn't animate on init load */}
      <motion.div
        className={className}
        initial={false}
        animate={
          onHelloPage && pageClickedOnce
            ? "hello"
            : !onHelloPage && pageClickedOnce
            ? "about"
            : null
        }
        transition={{ ease: "easeInOut", timing: [0, 0.6, 0.8, 0.8, 0.9, 1] }}
        variants={circleVariants}
      >
        <div className={`circle ${onHelloPage ? "red" : "blue"}`}></div>
        {styles}
      </motion.div>
      <style jsx>{`
        .circle {
          position: relative;
          display: block;
          height: 100%;
          width: 100%;
          margin: 0 auto;
          border-radius: 50%;
          transition: all 0.3s;
        }

        .blue {
          background-color: #3bc9d1;
        }

        .red {
          background-color: #d13b40;
        }
      `}</style>
    </>
  );
};

export default Circle;
