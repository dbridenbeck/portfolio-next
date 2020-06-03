import Head from "next/head";
import styled from "styled-components";
import { useState } from "react";
import TitleText from "../components/TitleText";
import CircleAndImages from "../components/CircleAndImages";
import PageLinkContainer from "../components/PageLinkContainer";
import InfoText from "../components/InfoText";
import Layout from "../components/Layout";
import AppStateModel from "../models/appState";

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 2;
  max-height: calc(100vh - 60px);
  align-self: center;
`;

export default function Home() {
  // infoText's structure allows the html to be injected via dangerouslySetInnerHTML
  const [appState, updateAppState] = useState<AppStateModel>({
    onHelloPage: true,
    indexToSelect: 0,
    title: ["HELLO", "ABOUT"],
    infoText: [
      {
        __html: `
          <p>My name is Darren and I’m a web developer.</p>
          <p>I have been helping people build websites for over ten years, from
          designing and wireframing to getting code on servers so users can see
          their stuff. I recently expanded my skills with React, Redux, Node.js,
          MongoDB, and other fun things.</p>
          <p> <a href="mailto:darren.bridenbeck@gmail.com">Send me an email</a> if
          you’d like to work together. </p>
          <p>Check out my latest project for <a href="http://whidbeyherbal.com">Whidbey Herbal</a>.</p>
        `,
      },
      {
        __html: `
          <p>Although I have a background in some business-bro stuff (sales dev, solutions engineer, account & vendor management, creating documentation), I used to be a life coach which completely blew my mind. I learned how to hone my listening skills and ask good questions to help people figure out their own solutions. I bring all of this to my work as web developer. </p>
          <p> When I’m not working, I am hanging out with my wife and 18 month old daughter, playing pinball, or rollerskating. </p> 
        `,
      },
    ],
    pageClickedOnce: false,
  });

  // control which content to show from text's state pageClickedOnce prevents 
  // animations from firing on initial load
  const togglePage = (): void => {
    updateAppState({
      ...appState,
      onHelloPage: !appState.onHelloPage,
      indexToSelect: appState.onHelloPage ? 1 : 0,
      pageClickedOnce: true,
    });
  };

  return (
    <>
      <Head>
        <title>I'm Darren!</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          href="https://fonts.googleapis.com/css2?family=Muli:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <MainContent>
          <TitleText
            titleText={appState.title[appState.indexToSelect]}
            onHelloPage={appState.onHelloPage}
          />
          <CircleAndImages
            onHelloPage={appState.onHelloPage}
            pageClickedOnce={appState.pageClickedOnce}
          />
          <InfoText
            infoText={appState.infoText}
            indexToSelect={appState.indexToSelect}
          />
        </MainContent>
        <PageLinkContainer
          onHelloPage={appState.onHelloPage}
          handleTogglePane={togglePage}
        />
      </Layout>
      <style jsx global>{`
        #__next,
        html,
        body {
          padding: 0;
          margin: 0;
          background-color: black;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          overflow: hidden;
          height: 100%;
        }
        a {
          color: #8affff;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
