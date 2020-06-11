import { motion } from "framer-motion";
import { css } from "styled-jsx/css";
import { ReactElement } from "react";

interface FadeInAnimationProps {
  children: ReactElement;
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

const fadeInVariants = {
  initial: {
    opacity: 0,
  },
  exit: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const FadeInAnimation: React.FC<FadeInAnimationProps> = ({
  children,
}) => (
  /* animate ternary ensures that circle doesn't animate on init load */
  <motion.div
    className={className}
    initial="initial"
    animate="animate"
    exit="exit"
    variants={fadeInVariants}
    transition={{ ease: "easeInOut", timing: [0, 1] }}
  >
    {children}
    {styles}
  </motion.div>
);

export default FadeInAnimation;