const size = {
  mobileLandscape: "640px",
  tabletPortrait: "768px",
  tabletLandscape: "1024px",
  laptop: "1280px",
};

export const devices = {
  mobileLandscape: `(min-width: ${size.mobileLandscape})`,
  tabletPortrait: `(min-width: ${size.tabletPortrait})`,
  tabletLandscape: `(min-width: ${size.tabletLandscape})`,
  laptop: `(min-width: ${size.laptop})`,
};
