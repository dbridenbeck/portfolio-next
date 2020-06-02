interface InfoTextProps {
  onHelloPage: boolean;
  pageClickedOnce: boolean;
  infoText: [{__html: string}, {__html: string}];
  indexToSelect: number;
}

const InfoText: React.FC<InfoTextProps> = ({
  onHelloPage,
  pageClickedOnce,
  infoText,
  indexToSelect,
}) => (
  <>
    <div
      /* On toggle PageLinkContainer click toggle showing appState.infoText,
      add 'whiteFlare' or 'whiteFlareAgain' class to flare text white */
      className={`info-text ${
        onHelloPage && pageClickedOnce
          ? `whiteFlare`
          : !onHelloPage && pageClickedOnce
          ? `whiteFlareAgain`
          : null
      }`}
      dangerouslySetInnerHTML={infoText[indexToSelect]}
    ></div>
    <style jsx>{`
      .info-text {
        position: relative;
        left: 0;
        right: 0;
        margin: 10px auto 0 auto;
        font-family: "Muli", sans-serif;
        font-size: 0.750rem;
        font-weight: 400;
        line-height: 1.5em;
        width: 95%;
        color: #d4d4e4;
      }

      .whiteFlare {
        animation: flare-text-white 0.5s ease-in-out;
      }

      .whiteFlareAgain {
        animation: flare-text-white-again 0.5s ease-in-out;
      }

      @media screen and (min-width: 1270px) {
        .info-text {
          width: 80%;
          margin: 0 auto;
          font-size: 0.875rem;
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
  </>
);

export default InfoText;