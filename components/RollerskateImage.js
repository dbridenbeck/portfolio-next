const RollerskateImage = ({ onHelloPage }) => (
  <>
    <img
      className={`rollerskate ${onHelloPage ? "greenFilter" : null}`}
      src="/images/rollerskate.png"
      alt="An quad roller skate"
    />
    <style jsx>{`
      .rollerskate {
        display: block;
        position: absolute;
        margin: 25% 0px 0px 50%;
        width: 55%;
        animation: rotateRollerskate 40s infinite linear;
      }

      .blueFilter {
        filter: invert(93%) sepia(91%) saturate(6659%) hue-rotate(158deg)
          brightness(105%) contrast(105%);
      }

      .greenFilter {
        filter: invert(88%) sepia(17%) saturate(972%) hue-rotate(39deg)
          brightness(102%) contrast(106%);
      }

      @keyframes rotateRollerskate {
        0% {
          transform: translateY(0px) rotate(0deg);
        }
        50% {
          transform: translateY(80px) rotate(-75deg);
        }
        80% {
          transform: translateY(20px) rotate(-5deg);
        }
        100% {
          transform: translateY(0px) rotate(0deg);
        }
      }
    `}</style>
  </>
);

export default RollerskateImage;
