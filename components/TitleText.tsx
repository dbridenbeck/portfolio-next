import styled from 'styled-components';
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import TitleAnimation from "../animations/TitleAnimation";

const Title = styled.h1`
  position: absolute;
  margin-top: ${({ currentPage }) =>
    currentPage === "PORTFOLIO" ? "-0.325em" : "-.325em"};
  margin-left: ${({ currentPage }) =>
    currentPage === "PORTFOLIO" ? "0" : "2.5%"};
  padding: 0;
  font-family: "Crimson Text", serif;
  font-size: ${({ currentPage }) =>
    currentPage === "PORTFOLIO" ? "2.5em" : "4em"};
  font-weight: 200;
  line-height: 1em;
  color: ${({ color }) =>
    color === "red" ? "#d13b40" : color === "blue" ? "#3bc9d1" : "#ffff8a"};
  @media (min-width: 1270px) {
    font-size: ${({ currentPage }) =>
      currentPage === "PORTFOLIO" ? "3.333em" : "6em"};
  }
`;

const SubTitle = styled.h2`
  position: absolute;
  margin-top: .825em;
  color: #ffff8a;
  font-weight: bold;
  font-size: 1.5em;
  font-family: "Muli", sans-serif; 
  @media (min-width: 1270px) {
    font-size: 2.125em;
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
      <AnimatePresence initial={false}>
        {currentPage === "PORTFOLIO" && (
          <TitleAnimation>
            <Title 
              color={"yellow"}
              currentPage={currentPage}
            >
              Darren Bridenbeck
            </Title>
            <SubTitle>Software Engineer</SubTitle>
          </TitleAnimation>
        )}
      </AnimatePresence>
    </>
  );
};

export default TitleText;
