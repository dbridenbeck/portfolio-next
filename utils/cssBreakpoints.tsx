const size = {
  mobilePortrait: "640px",
  mobileLandscape: "640px",
  tabletPortrait: "768px",
  tabletLandscape: "1024px",
  laptop: "1280px",
};

export const devices = {
  mobilePortrait: `(max-width: ${size.mobilePortrait})`,
  mobileLandscape: `(min-width: ${size.mobileLandscape})`,
  tabletPortrait: `(min-width: ${size.tabletPortrait})`,
  tabletLandscape: `(min-width: ${size.tabletLandscape})`,
  laptop: `(min-width: ${size.laptop})`,
};
