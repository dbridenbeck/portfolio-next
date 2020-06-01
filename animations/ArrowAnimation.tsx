import { motion } from "framer-motion";

interface ArrowAnimationProps {
  children: string;
}

const arrowVariants = {
  moveUp: { opacity: 0, y: "100px", x: "0px" },
  center: { opacity: 1, y: "0", x: "0px", rotate: 1080 },
  moveRight: { opacity: 0, y: "0px", x: "100px" },
};

const ArrowAnimation: React.FC<ArrowAnimationProps> = ({ children }) =>
  <motion.div
    initial="moveUp"
    animate="center"
    exit="moveRight"
    transition={{ duration: 1.25 }}
    variants={arrowVariants}
  >
    {children}
  </motion.div>
            
export default ArrowAnimation;
