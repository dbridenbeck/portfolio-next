import PhoneImage from "./PhoneImage";
import ComputerImage from "./ComputerImage";
import PinballImage from "./PinballImage";
import RollerskateImage from "./RollerskateImage";
import ImageAnimation from "../../animations/ImageAnimation";

interface ImagesProps {
  leftOriented: boolean;
  currentPage: string;
  pageClickedOnce: boolean;
  projectHoveredIndex: number;
}

const Images: React.FC<ImagesProps> = ({
  leftOriented,
  currentPage,
  pageClickedOnce,
  projectHoveredIndex,
}) => {
  const helloImageConfig = {
    initial: "flyIn",
    animate:
      currentPage === "HELLO"
        ? "center"
        : currentPage === "PORTFOLIO"
        ? "portfolioUp"
        : "flyOut",
  };

  const aboutImageConfig = {
    initial: false,
    animate:
      currentPage === "ABOUT"
        ? "center"
        : currentPage === "PORTFOLIO"
        ? "portfolioDown"
        : "flyOut",
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
            projectHoveredIndex={projectHoveredIndex}
          />
        ) : (
          <PhoneImage
            currentPage={currentPage}
            pageClickedOnce={pageClickedOnce}
            projectHoveredIndex={projectHoveredIndex}
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
            projectHoveredIndex={projectHoveredIndex}
          />
        ) : (
          <RollerskateImage
            currentPage={currentPage}
            pageClickedOnce={pageClickedOnce}
            projectHoveredIndex={projectHoveredIndex}
          />
        )}
      </ImageAnimation>
    </>
  );
};

export default Images;
