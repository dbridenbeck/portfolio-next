const PhoneImage = ({ onHelloPage }) => (
  <>
    <img
      className={`phone ${onHelloPage ? null : "blueFilter"}`}
      src="/images/rollerskate.png"
      alt="An 80's style mobile phone"
    />
    <style jsx>{`
      .phone {
        display: block;
        position: absolute;
        margin: 25% 0px 0px 50%;
        width: 70%;
        height: auto;
        animation: rotatePhone 50s infinite linear;
        transition: border 1s;
      }

      .blueFilter {
        filter: invert(93%) sepia(91%) saturate(6659%) hue-rotate(158deg)
          brightness(105%) contrast(105%);
      }

      .greenFilter {
        filter: invert(88%) sepia(17%) saturate(972%) hue-rotate(39deg)
          brightness(102%) contrast(106%);
      }

      @keyframes rotatePhone {
        0% {
          transform: translateY(0px) rotate(0deg);
        }
        50% {
          transform: translateY(-120px) rotate(-45deg);
        }
        80% {
          transform: translateY(60px) rotate(5deg);
        }
        100% {
          transform: translateY(0px) rotate(0deg);
        }
      }
    `}</style>
  </>
);

export default PhoneImage;
