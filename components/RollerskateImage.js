const RollerskateImage = ({ onHelloPage }) => (
  <>
    <img
      className={`rollerskate ${onHelloPage ? "blueFilter" : null}`}
      src="/images/rollerskate.png"
      alt="A quad roller skate"
    />
    <style jsx>{`
      .rollerskate {
        display: block;
        position: absolute;
        margin: 25% 0px 0px 50%;
        width: 55%;
        animation: rotateRollerskate 80s infinite linear;
        animation-delay: 400ms;
        transition: filter 0.5s;
        -webkit-transform: rotateZ(360deg);
      }

      @keyframes rotateRollerskate {
        0% {
          transform: translateY(0px) rotate(0deg);
        }
        50% {
          transform: translateY(-120px) rotate(-65deg);
        }
        100% {
          transform: translateY(0px) rotate(0deg);
        }
      }
    `}</style>
  </>
);

export default RollerskateImage;
