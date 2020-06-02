import { motion } from "framer-motion";

interface PageLinkAnimationProps {
  children: string;
}

const variants = {
  moveUp: { opacity: 0, y: "100px", x: "0px" },
  center: { opacity: 1, y: "0", x: "0px", rotate: 360 },
  moveRight: { opacity: 0, y: "0px", x: "100px" },
};

const PageLinkAnimation: React.FC<PageLinkAnimationProps> = ({ children }) =>
  <motion.div
    className="linkText"
    initial="moveUp"
    animate="center"
    exit="moveRight"
    transition={{ duration: 1.5 }}
    variants={variants}
  >
    {children}
  </motion.div>
        
export default PageLinkAnimation;