import { motion, AnimatePresence } from "framer-motion";

const variants = {
  moveUp: { opacity: 0, y: "0px", x: "-100px" },
  center: { opacity: 1, y: "0", x: "0px" },
  moveRight: { opacity: 0, y: "-100px", x: "0px" },
};

const TitleText = ({ text, onHelloPage }) => (
  <>
    <AnimatePresence>
      {onHelloPage && (
        <motion.div
          className="title"
          initial="moveUp"
          animate="center"
          exit="moveRight"
          variants={variants}
        >
          <h1 className="title">{text}</h1>
        </motion.div>
      )}
    </AnimatePresence>
    <AnimatePresence>
      {!onHelloPage && (
        <motion.div
          className="title" 
          initial="moveUp"
          animate="center"
          exit="moveRight"
          variants={variants}
        >
          <h1 className="title">{text}</h1>
        </motion.div>
      )}
    </AnimatePresence>

    <style jsx>{`
      .title {
        position: absolute;
        font-size: 1em;
        font-weight: 300;
        margin: -5% 0 0 10%;
      }
    `}</style>
  </>
);

export default TitleText;