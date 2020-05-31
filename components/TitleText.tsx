import { motion, AnimatePresence } from "framer-motion";
import { css } from "styled-jsx/css";
import Head from 'next/head';

interface TitleTextProps {
  titleText: string;
  onHelloPage: boolean;
}

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

const TitleText = (props: TitleTextProps) => {
  const { onHelloPage, titleText} = props;

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AnimatePresence initial={false}>
        {onHelloPage && (
          <motion.div
            className={className}
            initial="moveUp"
            animate="center"
            exit="moveRight"
            transition={{ duration: 1 }}
            variants={variants}
          >
            <h1 className="title blue">{titleText}</h1>
            {styles}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {!onHelloPage && (
          <motion.div
            className={className}
            initial="moveUp"
            animate="center"
            exit="moveRight"
            transition={{ duration: 1 }}
            variants={variants}
          >
            <h1 className="title red">{titleText}</h1>
            {styles}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .title {
          position: absolute;
          font-family: "Crimson Text", serif;
          font-size: 4em;
          font-weight: 200;
          margin: -5% 0 0 2.5%;
          padding: 0;
          line-height: 1em;
        }

        @media screen and (min-width: 1270px) {
          .title {
            font-size: 6em;
          }
        }
      `}</style>
    </>
  )
};

export default TitleText;