import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hi, it's Darren!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1 className="title">HELLO</h1>

        <div className="circle">
          <img className="computer" src="/images/computer.png" alt="An open laptop"/>
          <img className="phone" src="/images/phone.png" alt="An old brick cell phone from the 80's"/>

        </div>
        <p className="info-text">
          My name is Darren and I’m a web developer.
          <br />
          <br />
          I have been helping people build websites for over ten years, from
          designing and wireframing to getting code on servers so users can see
          their stuff. I recently expanded my skills with React, Redux, Node.js,
          MongoDB, and other fun things.
          <br />
          <br />
          Send me an email if you’d like to work together.
          <br />
          <br />
          Check out my latest project for Whidbey Herbal.
        </p>
        <span className="aboutLink">
          about
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
          margin: 10% 0 0 10%;
        }

        .circle {
          position: relative;
          display: block;
          height: 360px;
          width: 360px;
          margin: 10% auto 0 auto;
          border-radius: 50%;
          background-color: #c5ff8a;
        }

        .computer {
          display: block;
          position: absolute;
          left: -10%;
          top: 20%;
          width: 65%;
          animation: rotateCW 100s infinite
        }
        
        .phone {
          display: block;
          position: absolute;
          right: -25%;
          top: 12%;
          width: 80%;
          animation: rotateCCW 120s infinite
        }

        .info-text {
          font-size: 1em;
          line-height: 1.125em;
          font-weight: 300;
          margin: 30px auto 0 auto;
          width: 85%;
        }

        .aboutLink {
          position: absolute;
          display: inline-block;
          right: 30px;
          bottom: 10px;
          font-size: 0.9em;
          font-style: italic;
          color: #8affff;
        }

        @keyframes rotateCW {
          0% {transform: translateY(0px) rotate(0deg)}
          15% {transform: rotate(-5deg)}
          50% {transform: translateY(60px) rotate(45deg)}
          100% {transform: translateY(0px) rotate(0deg)}
        }
        
        @keyframes rotateCCW {
          0% {transform: translateY(0px) rotate(0deg)}
          50% {transform: translateY(-120px) rotate(-45deg)}
          80% {transform: translateY(60px) rotate(5deg)}
          100% {transform: translateY(0px) rotate(0deg)}
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

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
