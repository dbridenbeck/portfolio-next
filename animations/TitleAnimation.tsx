import { motion, AnimatePresence } from "framer-motion";
import { css } from "styled-jsx/css";

// control styles for motion.div's
const { className, styles } = css.resolve`
  div {
    display: block;
    position: relative;
    z-index: 1;
    padding: 0;
    margin: 0;
  }
`;

const variants = {
  moveUp: { opacity: 0, y: "0px", x: "-100px" },
  center: { opacity: 1, y: "0", x: "0px" },
  moveRight: { opacity: 0, y: "-100px", x: "0px" },
};

const TitleAnimation: React.FC = ({children}) => {
  return (
    <motion.div
      className={className}
      initial="moveUp"
      animate="center"
      exit="moveRight"
      transition={{ duration: 1 }}
      variants={variants}
    >
      {children}
      {styles}
    </motion.div>
  );
};

export default TitleAnimation;
