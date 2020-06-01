import ImageModel from "../../models/images";

const PhoneImage: React.FC<ImageModel> = ({ onHelloPage }) => (
  <>
    <picture>
      <source
        srcSet={require("../../public/images/phone.png?webp")}
        type="image/webp"
      />
      <source
        srcSet={require("../../public/images/phone.png")}
        type="image/png"
      />
      <img
        className={`phone ${onHelloPage ? "blueFilter" : "redFilter"}`}
        srcSet={require("../../public/images/phone.png")}
        alt="An 80's style mobile phone"
      />
    </picture>
    <style jsx>{`
      .phone {
        display: block;
        position: absolute;
        margin: 25% 0px 0px 60%;
        width: 35%;
        height: auto;
        animation: rotatePhone 90s infinite linear;
        animation-delay: 300ms;
        transition: filter 0.5s;
        -webkit-transform: rotateZ(360deg);
      }

      @keyframes rotatePhone {
        0% {
          transform: translateY(0px) rotate(0deg);
        }
        80% {
          transform: translateY(60px) rotate(45deg);
        }
        100% {
          transform: translateY(0px) rotate(0deg);
        }
      }
    `}</style>
  </>
);

export default PhoneImage;