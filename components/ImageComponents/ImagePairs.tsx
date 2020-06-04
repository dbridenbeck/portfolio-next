import PhoneImage from "./PhoneImage";
import ComputerImage from "./ComputerImage";
import PinballImage from "./PinballImage";
import RollerskateImage from "./RollerskateImage";
import ImageAnimation from "../../animations/ImageAnimation";

interface ImagesProps {
  leftOriented: boolean;
  currentPage: string;
  pageClickedOnce: boolean;
}

const Images: React.FC<ImagesProps> = ({
  leftOriented,
  currentPage,
  pageClickedOnce,
}) => {
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
          <ComputerImage
            currentPage={currentPage}
            pageClickedOnce={pageClickedOnce}
          />
        ) : (
          <PhoneImage
            currentPage={currentPage}
            pageClickedOnce={pageClickedOnce}
          />
        )}
      </ImageAnimation>

      {/* handle images for ABOUT */}
      <ImageAnimation
        imageConfig={aboutImageConfig}
        leftOriented={leftOriented}
      >
        {leftOriented ? (
          <PinballImage
            currentPage={currentPage}
            pageClickedOnce={pageClickedOnce}
          />
        ) : (
          <RollerskateImage
            currentPage={currentPage}
            pageClickedOnce={pageClickedOnce}
          />
        )}
      </ImageAnimation>
    </>
  );
};

export default Images;
