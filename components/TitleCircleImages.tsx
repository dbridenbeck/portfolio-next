import TitleText from "./TitleText";
import CircleAndImages from "./CircleAndImages";

interface TitleCircleProps {
  titleText: string;
  onHelloPage: boolean;
  pageClickedOnce: boolean;
}

const TitleCircleImages: React.FC<TitleCircleProps> = ({
  titleText,
  onHelloPage,
  pageClickedOnce,
}) => {
  return (
    <>
      <TitleText titleText={titleText} onHelloPage={onHelloPage} />
      <CircleAndImages
        onHelloPage={onHelloPage}
        pageClickedOnce={pageClickedOnce}
      />
    </>
  );
};

export default TitleCircleImages;
