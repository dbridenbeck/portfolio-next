const PinballImage = ({ onHelloPage }) => (
  <>
    <img
      className={`pinball ${onHelloPage ? "blueFilter" : "redFilter"}`}
      src="/images/pinball.png"
      alt="An pinball table"
    />
    <style jsx>{`
      .pinball {
        display: block;
        position: absolute;
        margin: 25% 0 0 -5%;
        width: 40%;
        animation: rotatePinball 80s infinite linear;
        animation-delay: 100ms;
        transition: filter 0.5s;
        -webkit-transform: rotateZ(360deg);
      }

      @keyframes rotatePinball {
        0% {
          transform: translateY(0px) rotate(0deg);
        }
        35% {
          transform: translateY(-90px) rotate(40deg);
        }
        100% {
          transform: translateY(0px) rotate(0deg);
        }
      }
    `}</style>
  </>
);

export default PinballImage;
