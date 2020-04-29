const ComputerImage = ({ onHelloPage }) => (
  <>
    <picture>
      <source
        srcSet={require("../public/images/computer.png?webp")}
        type="image/webp"
      />
      <source
        srcSet={require("../public/images/computer.png")}
        type="image/png"
      />
      <img
        className={`computer ${onHelloPage ? "blueFilter" : "redFilter"}`}
        srcSet={require("../public/images/computer.png")}
        alt="An open laptop"
      />
    </picture>
    <style jsx>{`
      .computer {
        display: block;
        position: absolute;
        margin: 25% 0 0 0;
        width: 55%;
        animation: rotateComputer 90s infinite linear;
        animation-delay: 200ms;
        transition: filter 0.5s;
        -webkit-transform: rotateZ(360deg);
      }

      @keyframes rotateComputer {
        0% {
          transform: translateY(0px) rotate(0deg);
        }
        75% {
          transform: translateY(-60px) rotate(-25deg);
        }
        100% {
          transform: translateY(0px) rotate(0deg);
        }
      }
    `}</style>
  </>
);

export default ComputerImage;
