import { motion, AnimatePresence } from "framer-motion";

const arrowVariants = {
  moveUp: { opacity: 0, y: "100px", x: "0px" },
  center: { opacity: 1, y: "0", x: "0px", rotate: 360 },
  moveRight: { opacity: 0, y: "0px", x: "100px" },
};

const PageArrow = ({ handleTogglePage, onHelloPage }) => (
  <>
    <AnimatePresence>
      {onHelloPage && (
        <>
          <span className="arrow">
            <motion.div
              initial="moveUp"
              animate="center"
              exit="moveRight"
              transition={{ duration: 2 }}
              variants={arrowVariants}
            >
              -->
            </motion.div>
          </span>
        </>
      )}
    </AnimatePresence>
    <AnimatePresence>
      {!onHelloPage && (
        <span className="arrow">
          <motion.div
            initial="moveUp"
            animate="center"
            exit="moveRight"
            transition={{ duration: 2 }}
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
        color: #8affff;
        cursor: pointer;
      }
    `}</style>
  </>
);

export default PageArrow;
