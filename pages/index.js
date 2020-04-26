import Head from 'next/head'
import { useState } from 'react';
import PageLink from '../components/PageLink';
import PageArrow from '../components/PageArrow';
import TitleText from '../components/TitleText';
import Circle from '../components/Circle';
import LeftImage from '../components/LeftImage';
import RightImage from '../components/RightImage';

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

      <main>
        <TitleText
          text={text.onHelloPage ? "HELLO" : "ABOUT"}
          onHelloPage={text.onHelloPage}
        />

        <LeftImage onHelloPage={text.onHelloPage} />
        <RightImage onHelloPage={text.onHelloPage} />
        <Circle onHelloPage={text.onHelloPage} />
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
      </main>

      <style jsx>{`
        .container {
          display: block;
          position: relative;
          margin: 0 auto;
          height: 100vh;
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
          border: 1px solid red;
          bottom: 0px;
          right: 0;
        }

        .whiteFlare {
          animation: flare-text-white 0.5s ease-in-out;
        }

        .whiteFlareAgain {
          animation: flare-text-white-again 0.5s ease-in-out;
        }

        .computer {
          display: block;
          position: absolute;
          left: -2%;
          top: 10%;
          width: 55%;
          animation: rotateCW 100s infinite;
          z-index: 2;
        }

        .phone {
          display: block;
          position: absolute;
          right: -17%;
          top: 7.5%;
          width: 70%;
          animation: rotateCCW 120s infinite;
          z-index: 2;
        }

        .green {
          background-color: #c5ff8a;
        }

        .blue {
          background-color: #8affff;
        }

        @keyframes rotateCW {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          15% {
            transform: rotate(-5deg);
          }
          50% {
            transform: translateY(60px) rotate(45deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        @keyframes rotateCCW {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-120px) rotate(-45deg);
          }
          80% {
            transform: translateY(60px) rotate(5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        @media screen and (min-width: 1270px) {
          .container {
            max-width: 650px;
          }

          .title {
            margin: 5%;
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
