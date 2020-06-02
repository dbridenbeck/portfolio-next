import ImageModel from '../../models/images';

const RollerskateImage: React.FC<ImageModel> = ({ onHelloPage }) => (
  <>
    <picture>
      <source
        srcSet={require("../../public/images/rollerskate.png?webp")}
        type="image/webp"
      />
      <source
        srcSet={require("../../public/images/rollerskate.png")}
        type="image/jpeg"
      />
      <img
        className={`rollerskate ${onHelloPage ? "blueFilter" : "redFilter"}`}
        src={require("../../public/images/rollerskate.png")}
        alt="A quad rollerskate"
      />
    </picture>
    <style jsx>{`
      .rollerskate {
        display: block;
        position: absolute;
        margin: 25% 0px 0px 50%;
        width: 45%;
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
