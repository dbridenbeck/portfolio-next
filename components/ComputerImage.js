const ComputerImage = ({ onHelloPage }) => (
  <>
    <img
      className={`computer ${onHelloPage ? null : "blueFilter"}`}
      src="/images/pinball.png"
      alt="An open laptop"
    />
    <style jsx>{`
      .computer {
        display: block;
        position: absolute;
        margin: 25% 0 0 0;
        width: 55%;
        animation: rotateComputer 50s infinite linear;
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

      @keyframes rotateComputer {
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

    `}</style>
  </>
);

export default ComputerImage;
