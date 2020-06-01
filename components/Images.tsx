import { motion } from "framer-motion";
import { css } from "styled-jsx/css";
import PhoneImage from './PhoneImage';
import ComputerImage from './ComputerImage';
import PinballImage from './PinballImage';
import RollerskateImage from './RollerskateImage';

interface ImagesProps {
  leftOriented: boolean;
  onHelloPage: boolean;
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
    }
  }),
};

const Images: React.FC<ImagesProps> = ({ leftOriented, onHelloPage }) => {
  return (
    <>
      <motion.div
        className={className}
        initial="flyIn"
        animate={onHelloPage ? "center" : "flyOut"}
        custom={leftOriented}
        variants={imageVariants}
      >
        {leftOriented ? (
          <ComputerImage onHelloPage={onHelloPage} />
        ) : (
          <PhoneImage onHelloPage={onHelloPage} />
        )}
        {styles}
      </motion.div>

      <motion.div
        className={className}
        initial={false}
        animate={!onHelloPage ? "center" : "flyOut"}
        custom={leftOriented}
        variants={imageVariants}
      >
        {leftOriented ? (
          <PinballImage onHelloPage={onHelloPage} />
        ) : (
          <RollerskateImage onHelloPage={onHelloPage} />
        )}

        {styles}
      </motion.div>
    </>
  );
}

export default Images;
