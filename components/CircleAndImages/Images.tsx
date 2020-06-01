import PhoneImage from "./PhoneImage";
import ComputerImage from "./ComputerImage";
import PinballImage from "./PinballImage";
import RollerskateImage from "./RollerskateImage";
import ImageAnimation from "../../animations/ImageAnimation";

interface ImagesProps {
  leftOriented: boolean;
  onHelloPage: boolean;
}

const Images: React.FC<ImagesProps> = ({ leftOriented, onHelloPage }) => {
  const helloImageConfig = {
    initial: "flyIn",
    animate: onHelloPage ? "center" : "flyOut",
  };

  const aboutImageConfig = {
    initial: false,
    animate: !onHelloPage ? "center" : "flyOut",
  };

  return (
    <>
      {/* handle images for HELLO */}
      <ImageAnimation
        imageConfig={helloImageConfig}
        leftOriented={leftOriented}
      >
        {leftOriented ? (
          <ComputerImage onHelloPage={onHelloPage} />
        ) : (
          <PhoneImage onHelloPage={onHelloPage} />
        )}
      </ImageAnimation>

      {/* handle images for ABOUT */}
      <ImageAnimation
        imageConfig={aboutImageConfig}
        leftOriented={leftOriented}
      >
        {leftOriented ? (
          <PinballImage onHelloPage={onHelloPage} />
        ) : (
          <RollerskateImage onHelloPage={onHelloPage} />
        )}
      </ImageAnimation>
    </>
  );
};

export default Images;
