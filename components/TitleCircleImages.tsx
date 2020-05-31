import TitleText from "./TitleText";
import CircleAndImages from "./CircleAndImages";

interface TitleCircleProps {
  titleText: string;
  onHelloPage: boolean;
  pageClickedOnce: boolean;
}

export default function TitleCircleImages(props: TitleCircleProps) {
  const { titleText, onHelloPage, pageClickedOnce } = props;
  
  return (
    <>
      <TitleText
        titleText={titleText}
        onHelloPage={onHelloPage}
      />
      <CircleAndImages
        onHelloPage={onHelloPage}
        pageClickedOnce={pageClickedOnce}
      />
    </>
  );
}
