import Head from "next/head";
import styled from "styled-components";
import { useState } from "react";
import TitleText from "../components/TitleText";
import CircleContainer from "../components/CircleContainer";
import ImagePairs from "../components/ImageComponents/ImagePairs";
import PageLinkContainer from "../components/PageLinkContainer";
import InfoText from "../components/InfoText";
import Layout from "../components/Layout";
import AppStateModel from "../models/appState";
import { devices } from '../utils/cssBreakpoints';

const whidbeyGif = require("../public/images/whidbeyherbal.gif");
const chatappGif = require("../public/images/chatapp.gif");
const taskManagerGif = require("../public/images/taskmanager.gif");

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 95%;
  height: 100%;
  margin: 0 auto;
  @media ${devices.mobileLandscape} {
    width: 80%;
  }
`;

export default function Home() {
  // infoText's structure allows the html to be injected via dangerouslySetInnerHTML
  const [appState, updateAppState] = useState<AppStateModel>({
    currentPage: "portfolio",
    projectHoveredIndex: -1,
    indexToSelect: 0,
    pages: [
      {
        pageName: "portfolio",
        color: "#427ce6",
      },
      {
        pageName: "skills",
        color: "#6f59e9",
      },
      {
        pageName: "about",
        color: "#b0292e",
      },
    ],
    infoText: {
      skills: {
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
      about: {
        __html: `
          <p>Although I have a background in some business-bro stuff (sales dev, solutions engineer, account & vendor management, creating documentation), I used to be a life coach which completely blew my mind. I learned how to hone my listening skills and ask good questions to help people figure out their own solutions. I bring all of this to my work as web developer. </p>
          <p> When I’m not working, I am hanging out with my wife and 18 month old daughter, playing pinball, or rollerskating. </p> 
        `,
      },
    },
    projects: [
      {
        title: "Whidbey Herbal",
        type: "eCommerce Website",
        tech: ["React", "Redux", "Styled-Components", "Shopify API"],
        goals:
          "Remove reliance on Shopify theme by building a custom site, tell “the story” of the brand through images and photos",
        projectDetail:
          "Implemented designer’s files into pixel-perfect responsive site, seamlessly manage state for checkout",
        url: "http://whidbeyherbal.com",
        color: "#9686ef",
        gif: `${whidbeyGif}`,
      },
      {
        title: "Chat App",
        type: "Realtime Chat Application",
        tech: ["NodeJS", "Express", "Socket.io", "Handlebars"],
        goals:
          "Build a chat app that supports multiple rooms, location sharing, and ensuring usernames are unique within a given room",
        projectDetail:
          "Used Socket.io for realtime communication, Handlebars for UI templating",
        url: "https://secret-hollows-65310.herokuapp.com/",
        color: "#6f9bec",
        gif: `${chatappGif}`,
      },
      {
        title: "Task Manager",
        type: "Auth Enabled CRUD API",
        tech: ["NodeJS", "Express", "MongoDB", "Multer", "JWT"],
        goals:
          "Create an API that handles CRUD operations on users, tasks and avatar images, using auth to limit users to only see their own tasks",
        projectDetail:
          "I handled the DB config, building the API, JWT for auth, and using Multer for form-data",
        url: "https://github.com/dbridenbeck/task-manager-api",
        color: "#d13b40",
        gif: `${taskManagerGif}`,
      },
    ],
    pageClickedOnce: false,
  });

  // control which content to show from text's state pageClickedOnce prevents 
  // animations from firing on initial load
  const changePage = (newPage): void => {
    updateAppState({
      ...appState,
      currentPage: newPage,
      pageClickedOnce: true,
      projectHoveredIndex: -1
    });
  };

  // update state when project is hovered
  // on hover, show animated gif of proj in circle and expand that project's details
  const updateProjectHoveredIndex = (projectIndex) => {
    updateAppState({
      ...appState,
      projectHoveredIndex: projectIndex,
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
      </Head>
      <Layout>
        <MainContent>
          <TitleText />
          <CircleContainer
            currentPage={appState.currentPage}
            pageClickedOnce={appState.pageClickedOnce}
            projectHoveredIndex={appState.projectHoveredIndex}
            projects={appState.projects}
          >
            <ImagePairs
              leftOriented={true}
              currentPage={appState.currentPage}
              pageClickedOnce={appState.pageClickedOnce}
              projectHoveredIndex={appState.projectHoveredIndex}
            />
            <ImagePairs
              leftOriented={false}
              currentPage={appState.currentPage}
              pageClickedOnce={appState.pageClickedOnce}
              projectHoveredIndex={appState.projectHoveredIndex}
            />
          </CircleContainer>
          <InfoText
            infoText={appState.infoText[appState.currentPage]}
            currentPage={appState.currentPage}
            projects={appState.projects}
            updateProjectHoveredIndex={updateProjectHoveredIndex}
            projectHoveredIndex={appState.projectHoveredIndex}
          />
          <PageLinkContainer
            currentPage={appState.currentPage}
            pages={appState.pages}
            changePage={changePage}
          />
        </MainContent>
      </Layout>
      <style jsx global>{`
        #__next,
        html,
        body {
          padding: 0;
          margin: 0;
          background-color: #f3edde;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          overflow: hidden;
          height: 100%;
          font-size: 1em;
        }
        a {
          color: #6f59e9;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
