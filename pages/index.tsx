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
const whidbeyGif = require("../public/images/whidbeyherbal.gif");
const chatappGif = require("../public/images/chatapp.gif");
const taskManagerGif = require("../public/images/taskmanager.gif");

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  width: 100%;
  height: 100%;
`;

export default function Home() {
  // infoText's structure allows the html to be injected via dangerouslySetInnerHTML
  const [appState, updateAppState] = useState<AppStateModel>({
    currentPage: "PORTFOLIO",
    projectHoveredIndex: -1,
    indexToSelect: 0,
    pages: [
      {
        pageName: "PORTFOLIO",
        color: "#427ce6",
      },
      {
        pageName: "SKILLS",
        color: "#6f59e9",
      },
      {
        pageName: "ABOUT",
        color: "#b0292e",
      },
    ],
    infoText: {
      SKILLS: {
        __html: `
          <strong>Front End:</strong> React, Redux, Styled-Components, JavaScript ES6, Next.js, Gatsby.js
          <br/><strong>Back End:</strong> Node.js, Express, RESTful API’s, MongoDB, Mongoose, Socket.io
          <br/><strong>Misc:</strong> Typescript, Webpack, Jest, Github, TDD, Shopify, Figma, Adobe Creative Suite

          <p>I am a detail oriented and intrinsically motivated software engineer with five years’ experience creating custom 
          websites using HTML/CSS/JavaScript, and eight years’ experience working directly with clients to solve complex technical 
          challenges. I enjoy coding great tech, bringing people together and having fun.</p>
          <p> <a href="mailto:darren.bridenbeck@gmail.com">CONTACT</a> / <a href="https://drive.google.com/file/d/1u4k2mapd49OVnDdJK1ebYFju1jYkXAPp/view?usp=sharing" target="_blank">RESUME</a></p>
        `,
      },
      ABOUT: {
        __html: `
          <p>Beyond tech, I have a background in sales development, solutions engineering, and
            account/vendor management, although my previous experience as a life coach most defines me. 
            In that role I improved my listening skills and ability to ask questions to help people figure out their own solutions. 
            I bring all of this to my work as web developer.</p>
          <p>When I’m not working, I am hanging out with my wife and daughter, playing pinball, or rollerskating. 
            <p>I also volunteer for the <a href="https://github.com/codeforpdx/dwellingly-app" target="_blank">Dwelling.ly</a> project at <a href="http://www.codeforpdx.org/" target="_blank">Code for PDX</a> and participate in coding meetups like
            <a href="https://www.meetup.com/Portland-ReactJS/" target="_blank">Portland ReactJS</a> and 
            <a href="https://www.meetup.com/Mentorship-Saturdays/" target="_blank">Mentorship Saturdays</a>.</p>
          </p> 
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
      projectHoveredIndex: -1,
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
        <link
          href="https://fonts.googleapis.com/css2?family=Muli:wght@300;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <MainContent>
          <TitleText currentPage={appState.currentPage} />
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
          background-color: wheat;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          overflow: hidden;
          height: 100%;
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
