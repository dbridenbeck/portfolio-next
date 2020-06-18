import styled from "styled-components";
import { useState, useEffect } from "react";
import { ProjectModel } from "../../models/appState";
import { devices } from "../../utils/cssBreakpoints";

const StyledImg = styled.img`
  position: relative;
  display: ${({ isVideoLoaded }) => isVideoLoaded ? "none" : "block"};
  height: 100%;
  margin: 0 auto;
  z-index: 1;
  @media ${devices.mobileLandscape} {
    position: absolute;
    height: auto;
    bottom: 0;
  }
`;

const StyledVideo = styled.video`
  position: relative;
  display: block;
  height: 100%;
  margin: 0 auto;
  z-index: 5;
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

  useEffect(() => {
    setIsVideoLoaded(false);
  }, [openProject])

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  return (
    <>
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
      <StyledImg
        src={openProject.thumb}
        alt={openProject.thumbAlt}
        isVideoLoaded={isVideoLoaded}
      />
    </>
  );
};
export default Video;
