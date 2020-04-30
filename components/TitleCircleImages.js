import TitleText from "./TitleText";
import CircleAndImages from "./CircleAndImages";

export default function TitleCircleImages({titleText, onHelloPage, pageClickedOnce}) {
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
