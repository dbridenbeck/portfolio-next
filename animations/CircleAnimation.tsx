import { motion } from "framer-motion";
import { css } from "styled-jsx/css";
import { ReactElement } from "react";

interface CircleAnimationProps {
  children: ReactElement;
  currentPage: string;
  pageClickedOnce: boolean;
}

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
  SKILLS: { scale: [null, 0.95, 1.05, 0.975, 1.025, 0.985, 1] },
  about: { scale: [null, 0.95, 1.05, 0.975, 1.025, 0.985, 1] },
};

const CircleAnimation: React.FC<CircleAnimationProps> = ({
  children,
  currentPage,
  pageClickedOnce,
}) => (
  /* animate ternary ensures that circle doesn't animate on init load */
  <motion.div
    className={className}
    initial={false}
    animate={
      currentPage === "SKILLS" && pageClickedOnce
        ? "skills"
        : currentPage === "ABOUT" && pageClickedOnce
        ? "about"
        : null
    }
    transition={{ ease: "easeInOut", timing: [0, 0.6, 0.8, 0.8, 0.9, 1] }}
    variants={circleVariants}
  >
    {children}
    {styles}
  </motion.div>
);

export default CircleAnimation;
