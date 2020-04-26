import { motion, AnimatePresence } from "framer-motion";

const arrowVariants = {
  moveUp: { opacity: 0, y: "100px", x: "0px" },
  center: { opacity: 1, y: "0", x: "0px", rotate: 1080 },
  moveRight: { opacity: 0, y: "0px", x: "100px" },
};

const PageArrow = ({ onHelloPage }) => (
  <>
    <AnimatePresence initial={false}>
      {onHelloPage && (
        <>
          <span className="arrow">
            <motion.div
              initial="moveUp"
              animate="center"
              exit="moveRight"
              transition={{ duration: 1.25 }}
              variants={arrowVariants}
            >
              -->
            </motion.div>
          </span>
        </>
      )}
    </AnimatePresence>
    <AnimatePresence initial={false}>
      {!onHelloPage && (
        <span className="arrow">
          <motion.div
            initial="moveUp"
            animate="center"
            exit="moveRight"
            transition={{ duration: 1.25 }}
            variants={arrowVariants}
          >
            <span className="arrow"></span>-->
          </motion.div>
        </span>
      )}
    </AnimatePresence>

    <style jsx>{`
      .arrow {
        position: absolute;
        display: block;
        right: 30px;
        bottom: 90px;
        width: 25px;
        font-size: 0.9em;
        font-style: italic;
        color: #c5ff8a;
        cursor: pointer;
      }
    `}</style>
  </>
);

export default PageArrow;