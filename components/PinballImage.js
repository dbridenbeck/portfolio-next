const PinballImage = ({ onHelloPage }) => (
  <>
    <img
      className={`pinball ${onHelloPage ? "greenFilter" : null}`}
      src="/images/pinball.png"
      alt="An pinball table"
    />
    <style jsx>{`
      .pinball {
        display: block;
        position: absolute;
        margin: 25% 0 0 0;
        width: 55%;
        animation: rotatePinball 40s infinite linear;
        transition: filter 0.5s;
      }

      .blueFilter {
        filter: invert(93%) sepia(91%) saturate(6659%) hue-rotate(158deg)
          brightness(105%) contrast(105%);
      }

      .greenFilter {
        filter: invert(88%) sepia(17%) saturate(972%) hue-rotate(39deg)
          brightness(102%) contrast(106%);
      }

      @keyframes rotatePinball {
        0% {
          transform: translateY(0px) rotate(0deg);
        }
        35% {
          transform: translateY(-80px) rotate(40deg);
        }
        65% {
          transform: translateY(60px) rotate(-10deg);
        }
        100% {
          transform: translateY(0px) rotate(0deg);
        }
      }
    `}</style>
  </>
);

export default PinballImage;
