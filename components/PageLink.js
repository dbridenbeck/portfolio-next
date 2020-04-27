import { motion, AnimatePresence } from "framer-motion";

const variants = {
  moveUp: { opacity: 0, y: "100px", x: "0px" },
  center: { opacity: 1, y: "0", x: "0px", rotate: 360 },
  moveRight: { opacity: 0, y: "0px", x: "100px" },
};

const PageLink = ({ onHelloPage }) => (
  <>
    <AnimatePresence initial={false}>
      {onHelloPage && (
        <>
          <span className="pageLink blue">
            <motion.div
              className="linkText"
              initial="moveUp"
              animate="center"
              exit="moveRight"
              transition={{ duration: 1.5 }}
              variants={variants}
            >
              about
            </motion.div>
          </span>
        </>
      )}
    </AnimatePresence>
    <AnimatePresence initial={false}>
      {!onHelloPage && (
        <span className="pageLink green">
          <motion.div
            className="linkText"
            initial="moveUp"
            animate="center"
            exit="moveRight"
            transition={{ duration: 1.5 }}
            variants={variants}
          >
            hello
          </motion.div>
        </span>
      )}
    </AnimatePresence>

    <style jsx>{`
      .pageLink {
        position: absolute;
        display: block;
        right: 60px;
        bottom: 90px;
        font-size: 0.9em;
        font-style: italic;
        cursor: pointer;
      }

      .linkText {
        position: absolute;
        display: inline;
        z-index: 99;
      }

      .green {
        color: #c5ff8a;
      }

      .blue {
        color: #8affff;
      }
    `}</style>
  </>
);

export default PageLink;