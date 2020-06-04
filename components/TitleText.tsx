import styled from 'styled-components';
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import TitleAnimation from "../animations/TitleAnimation";

const Title = styled.h1`
  position: absolute;
  margin: -5% 0 0 2.5%;
  padding: 0;
  font-family: "Crimson Text", serif;
  font-size: 4em;
  font-weight: 200;
  line-height: 1em;
  color: ${({ color }) => (color === "red" ? "#d13b40" : "#3bc9d1")}; 
  @media (min-width: 1270px) {
    font-size: 6em;
  }
`;

interface TitleTextProps {
  currentPage: string;
}

const TitleText: React.FC<TitleTextProps> = ({ currentPage }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* 
        check for currentPage & !currentPage used to add/remove from DOM
        which triggers AnimatePresence to fire animation
      */}
      <AnimatePresence initial={false}>
        {currentPage === "HELLO" && (
          <TitleAnimation>
            <Title color={"blue"}>{currentPage}</Title>
          </TitleAnimation>
        )}
      </AnimatePresence>
      <AnimatePresence initial={false}>
        {currentPage === "ABOUT" && (
          <TitleAnimation>
            <Title color={"red"}>{currentPage}</Title>
          </TitleAnimation>
        )}
      </AnimatePresence>
    </>
  );
};

export default TitleText;
