import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import TitleText from "../components/TitleText";
import CircleContainer from "../components/CircleContainer";
import ImagePairs from "../components/ImageComponents/ImagePairs";
import Nav from '../components/Nav';
import Info from "../components/Info";
import Layout from "../components/Layout";
import AppStateModel from "../models/appState";
import { devices } from '../utils/cssBreakpoints';
import initState from '../state/initState';

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
  const [appState, updateAppState] = useState<AppStateModel>(initState);

  // setting pageClickedOnce true prevents animations from firing on initial load
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
  const updateProjectSelected = (projectIndex) => {
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
          />
          <Info
            currentPage={appState.currentPage}
            projects={appState.projects}
            updateProjectSelected={updateProjectSelected}
          />
          <Nav
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
