import styled from "styled-components";
import { useState } from "react";
import { ProjectModel } from "../../models/appState";
import { devices } from "../../utils/cssBreakpoints";

const StyledImg = styled.img`
  opacity: ${({ isVideoLoaded }) => (isVideoLoaded ? 0 : 1)};
`;

const StyledVideo = styled.video`
  position: relative;
  display: block;
  height: 100%;
  margin: ${({ hidden }) => (hidden ? "-9999px" : "0 auto")};
  opacity: ${({ isVideoLoaded }) => (isVideoLoaded ? 1 : 0)};
  @media ${devices.mobileLandscape} {
    position: absolute;
    height: auto;
    bottom: 0;
  }
`;

interface VideoProps {
  openProject: ProjectModel;
}

const Video: React.FC<VideoProps> = ({ openProject }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  return (
    <>
      <StyledImg
        src={openProject.thumb}
        alt={openProject.thumbAlt}
        isVideoLoaded={isVideoLoaded}
      />
      <StyledVideo
        key={openProject.title}
        onLoadedData={onLoadedData}
        isVideoLoaded={isVideoLoaded}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={openProject.webm} type="video/webm" />
        <source src={openProject.mp4} type="video/mp4" />
      </StyledVideo>
    </>
  );
};
export default Video;
