import { motion } from "framer-motion";
import { css } from "styled-jsx/css";

// control styles for motion.div's
const { className, styles } = css.resolve`
  div {
    display: block;
    position: relative;
    z-index: 2;
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
    },
  }),
};

const ImageAnimation = ({ children, imageConfig, leftOriented }) => {
  return (
    <motion.div
      className={className}
      initial={imageConfig.initial}
      animate={imageConfig.animate}
      custom={leftOriented}
      variants={imageVariants}
    >
      {children}
      {styles}
    </motion.div>
  );
};

export default ImageAnimation;
