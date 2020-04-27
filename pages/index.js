import Head from 'next/head'
import { useState } from 'react';
import PageLink from '../components/PageLink';
import PageArrow from '../components/PageArrow';
import TitleText from '../components/TitleText';

import CircleAndImages from '../components/CircleAndImages';

export default function Home() {

  const [text, updateText] = useState({
    onHelloPage: true,
    indexToSelect: 0,
    title: ["HELLO", "ABOUT"],
    infoText: [
      {
        __html: `
          My name is Darren and I’m a web developer.
          <br />
          <br />
          I have been helping people build websites for over ten years, from
          designing and wireframing to getting code on servers so users can see
          their stuff. I recently expanded my skills with React, Redux, Node.js,
          MongoDB, and other fun things.
          <br />
          <br />
          <a href="mailto:darren.bridenbeck@gmail.com">Send me an email</a> if
          you’d like to work together.
          <br />
          <br />
          Check out my latest project for
          <a href="http://whidbeyherbal.com">Whidbey Herbal</a>.
        `,
      },
      {
        __html: `
          Although I have a background in some business-bro stuff (sales dev, solutions engineer, account & vendor management, creating documentation), I used to be a life coach which completely blew my mind. I learned how to hone my listening skills and ask good questions to help people figure out their own solutions. I bring all of this to my work as web developer.
          <br />
          <br />
          When I’m not working, I am hanging out with my wife and 18 month old daughter, playing pinball, or rollerskating, 
        `,
      },
    ],
    linkText: ["about", "hello"],
    pageClickedOnce: false,
  });

  const togglePage = () => {
    updateText({
      ...text, 
      onHelloPage: !text.onHelloPage,
      indexToSelect: text.onHelloPage ? 1 : 0,
      pageClickedOnce: true,
    });
  };

  return (
    <div className="container">
      <Head>
        <title>Hi, it's Darren!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitleText
        text={text.onHelloPage ? "HELLO" : "ABOUT"}
        onHelloPage={text.onHelloPage}
      />
      <CircleAndImages onHelloPage={text.onHelloPage} />
      <p
        className={`info-text ${
          text.onHelloPage && text.pageClickedOnce
            ? `whiteFlare`
            : !text.onHelloPage && text.pageClickedOnce
            ? `whiteFlareAgain`
            : null
        }`}
        dangerouslySetInnerHTML={text.infoText[text.indexToSelect]}
      ></p>
      <div className="link-container" onClick={() => togglePage()}>
        <PageLink
          text={text.onHelloPage ? "about" : "hello"}
          onHelloPage={text.onHelloPage}
        />
        <PageArrow
          text={text.onHelloPage ? "about" : "hello"}
          onHelloPage={text.onHelloPage}
        />
      </div>
      <style jsx>{`
        .container {
          display: block;
          position: relative;
          margin: 0 auto;
          height: 100vh;
          max-width: 650px;
          color: white;
        }

        .info-text {
          position: absolute;
          left: 0;
          right: 0;
          margin: 20px auto 0 auto;
          font-size: 0.9rem;
          line-height: 1.325em;
          font-weight: 300;
          width: 85%;
          color: #d4d4e4;
        }

        .link-container {
          position: absolute;
          display: block;
          bottom: 0;
          right: 0;
          font-size: .8em;
        }

        .whiteFlare {
          animation: flare-text-white 0.5s ease-in-out;
        }

        .whiteFlareAgain {
          animation: flare-text-white-again 0.5s ease-in-out;
        }

        @media screen and (min-width: 1270px) {
          .container {
            max-width: 650px;
          }

          .title {
            margin: 5%;
          }
        }
        
        @media screen and (min-width: 1800px) {
          .link-container {
            bottom: 20px;
          }
        }

        @keyframes flare-text-white {
          0% {
            color: #d4d4e4;
          }
          50% {
            color: white;
          }
          100% {
            color: #d4d4e4;
          }
        }

        @keyframes flare-text-white-again {
          0% {
            color: #d4d4e4;
          }
          50% {
            color: white;
          }
          100% {
            color: #d4d4e4;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background-color: black;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          overflow: hidden;
        }
        a {
          color: #8affff;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
