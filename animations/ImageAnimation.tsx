import { motion } from "framer-motion";
import { css } from "styled-jsx/css";
import { ReactElement } from "react";

interface ImageAnimationProps {
  children: ReactElement;
  imageConfig: {
    initial: string | boolean;
    animate: string;
  };
  leftOriented: boolean;
}

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
  center: (leftOriented) => ({
    x: leftOriented ? "-50%" : "70%",
    y: "-7.5vh",
    transition: {
      type: "spring",
      stiffness: 35,
      mass: 0.2,
      damping: 3.5,
    },
  }),
  flyOut: (leftOriented) => ({
    x: leftOriented ? "-250%" : "265%",
    y: "-7.5vh",
    transition: {
      type: "spring",
      stiffness: 35,
    },
  }),
  portfolioUp: (leftOriented) => ({
    x: leftOriented ? "-250%" : "265%",
    y: "40vh",
    transition: {
      type: "spring",
      stiffness: 35,
    },
  }),
  portfolioDown: (leftOriented) => ({
    x: leftOriented ? "-250%" : "250%",
    y: "-15vh",
    transition: {
      type: "spring",
      stiffness: 35,
    },
  }),
};

const ImageAnimation: React.FC<ImageAnimationProps> = ({ children, imageConfig, leftOriented }) => {
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
