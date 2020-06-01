import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import TitleAnimation from "../animations/TitleAnimation";

interface TitleTextProps {
  titleText: string;
  onHelloPage: boolean;
}

const TitleText: React.FC<TitleTextProps> = ({ onHelloPage, titleText }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* Animate "HELLO" as it enters/leaves the DOM */}
      <AnimatePresence initial={false}>
        {onHelloPage && (
          <TitleAnimation>
            <h1 className="title blue">{titleText}</h1>
          </TitleAnimation>
        )}
      </AnimatePresence>
      {/* Animate "ABOUT" as it enters/leaves the DOM  */}
      <AnimatePresence initial={false}>
        {!onHelloPage && (
          <TitleAnimation>
            <h1 className="title red">{titleText}</h1>
          </TitleAnimation>
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
  );
};

export default TitleText;
