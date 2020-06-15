import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import TitleText from "../components/TitleText";
import CircleContainer from "../components/CircleContainer";
import ImagePairs from "../components/ImageComponents/ImagePairs";
import PageLinkContainer from "../components/PageLinkContainer";
import InfoText from "../components/InfoText";
import Layout from "../components/Layout";
import AppStateModel from "../models/appState";
import { devices } from '../utils/cssBreakpoints';

const whidbeyHerbalWebm = "../images/whidbeyHerbalWebm.webm";
const chatAppWebm = "../images/chatAppWebm.webm";
const taskManagerWebm = "../images/taskManagerWebm.webm";
const whidbeyHerbalMp4 = "../images/whidbeyHerbalMp4.mp4";
const chatAppMp4 = "../images/chatAppMp4.mp4";
const taskManagerMp4 = "../images/taskManagerMp4.mp4";

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
        webm: `${whidbeyHerbalWebm}`,
        mp4: `${whidbeyHerbalMp4}`,
        open: false,
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
        webm: `${chatAppWebm}`,
        mp4: `${chatAppMp4}`,
        open: false,
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
        webm: `${taskManagerWebm}`,
        mp4: `${taskManagerMp4}`,
        open: false,
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
      projects: appState.projects.map(project => {
        return {
          ...project,
          open: false
        }
      })
    });
  };

  // update state when project is Selected
  // on hover, show animated Webm of proj in circle and expand that project's details
  const updateProjectSelectedIndex = (projectIndex) => {
    updateAppState({
      ...appState,
      projects: appState.projects.map((project, index) => {
        if (index === projectIndex) {
          return {
            ...project,
            open: !project.open,
          }
        }
        else {
          return {
            ...project,
            open: false,
          }
        }
      })
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
        <ImagePairs
          leftOriented={true}
          currentPage={appState.currentPage}
          pageClickedOnce={appState.pageClickedOnce}
        />
        <ImagePairs
          leftOriented={false}
          currentPage={appState.currentPage}
          pageClickedOnce={appState.pageClickedOnce}
        />
        <MainContent>
          <TitleText />
          <CircleContainer
            currentPage={appState.currentPage}
            pageClickedOnce={appState.pageClickedOnce}
            projects={appState.projects}
          ></CircleContainer>
          <InfoText
            currentPage={appState.currentPage}
            projects={appState.projects}
            updateProjectSelectedIndex={updateProjectSelectedIndex}
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
