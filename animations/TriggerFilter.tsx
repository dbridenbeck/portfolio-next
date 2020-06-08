const triggerFilter = (currentPage, projectHoveredIndex) => {
  if (currentPage === "PORTFOLIO") {
    if (projectHoveredIndex === 0) {
      return "invert(46%) sepia(99%) saturate(300%) hue-rotate(209deg) brightness(104%) contrast(88%)";
    } else if (projectHoveredIndex === 1) {
      return "invert(64%) sepia(39%) saturate(1881%) hue-rotate(192deg) brightness(92%) contrast(102%)";
    } else {
      return "invert(29%) sepia(58%) saturate(2574%) hue-rotate(336deg) brightness(87%) contrast(86%)";
    }
  }
  if (currentPage === "SKILLS") {
    return "invert(70%) sepia(34%) saturate(803%) hue-rotate(134deg) brightness(95%) contrast(83%)";
  } else {
    return "invert(15%) sepia(100%) saturate(2397%) hue-rotate(343deg) brightness(99%) contrast(80%)";
  }
};

  export default triggerFilter;