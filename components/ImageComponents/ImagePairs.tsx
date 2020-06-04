import PhoneImage from "./PhoneImage";
import ComputerImage from "./ComputerImage";
import PinballImage from "./PinballImage";
import RollerskateImage from "./RollerskateImage";
import ImageAnimation from "../../animations/ImageAnimation";

interface ImagesProps {
  leftOriented: boolean;
  currentPage: string;
}

const Images: React.FC<ImagesProps> = ({ leftOriented, currentPage }) => {
  const helloImageConfig = {
    initial: "flyIn",
    animate: currentPage === "HELLO" ? "center" : "flyOut",
  };

  const aboutImageConfig = {
    initial: false,
    animate: currentPage === "ABOUT" ? "center" : "flyOut",
  };

  return (
    <>
      {/* handle images for HELLO */}
      <ImageAnimation
        imageConfig={helloImageConfig}
        leftOriented={leftOriented}
      >
        {leftOriented ? (
          <ComputerImage currentPage={currentPage} />
        ) : (
          <PhoneImage currentPage={currentPage} />
        )}
      </ImageAnimation>

      {/* handle images for ABOUT */}
      <ImageAnimation
        imageConfig={aboutImageConfig}
        leftOriented={leftOriented}
      >
        {leftOriented ? (
          <PinballImage currentPage={currentPage} />
        ) : (
          <RollerskateImage currentPage={currentPage} />
        )}
      </ImageAnimation>
    </>
  );
};

export default Images;
