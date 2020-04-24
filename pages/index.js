import Head from 'next/head'
import { useState } from 'react';

export default function Home() {

  const [text, updateText] = useState({
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
  });

  return (
    <div className="container">
      <Head>
        <title>Hi, it's Darren!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1 className="title">{text.title[0]}</h1>

        <div className="circle">
          <img
            className="computer"
            src="/images/computer.png"
            alt="An open laptop"
          />
          <img
            className="phone"
            src="/images/phone.png"
            alt="An old brick cell phone from the 80's"
          />
        </div>
        <p className="info-text" dangerouslySetInnerHTML={text.infoText[0]}></p>
        <span className="pageLink">
          <span className="linkText">{text.linkText[0]}</span>
          <span className="hyphen1"> -</span>
          <span className="hyphen2">-</span>
          <span className="greaterSign">></span>
        </span>
      </main>

      <style jsx>{`
        .container {
          display: block;
          position: relative;
          margin: 0 auto;
          overflow: hidden;
          height: 100vh;
          color: white;
        }

        .title {
          font-size: 1em;
          font-weight: 300;
          margin: 5% 0 0 10%;
        }

        .circle {
          position: relative;
          display: block;
          height: 360px;
          width: 360px;
          margin: 5% auto 0 auto;
          border-radius: 50%;
          background-color: #c5ff8a;
        }

        .computer {
          display: block;
          position: absolute;
          left: -10%;
          top: 20%;
          width: 65%;
          animation: rotateCW 100s infinite;
        }

        .phone {
          display: block;
          position: absolute;
          right: -25%;
          top: 12%;
          width: 80%;
          animation: rotateCCW 120s infinite;
        }

        .info-text {
          font-size: 0.9em;
          line-height: 1.325em;
          font-weight: 300;
          margin: 20px auto 0 auto;
          width: 85%;
        }

        .pageLink {
          position: absolute;
          display: inline-block;
          right: 30px;
          bottom: 10px;
          font-size: 0.9em;
          font-style: italic;
          color: #8affff;
        }

        @media screen and (min-width: 1270px) {
          .container {
            max-width: 650px;
          }

          .title {
            margin: 5%;
          }
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
