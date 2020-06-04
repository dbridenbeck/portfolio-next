const triggerFilter = ( currentPage ) => {
  if (currentPage === "HELLO") {
    return "invert(70%) sepia(34%) saturate(803%) hue-rotate(134deg) brightness(95%) contrast(83%)"
  } else {
    return "invert(15%) sepia(100%) saturate(2397%) hue-rotate(343deg) brightness(99%) contrast(80%)" 
  }
}

  export default triggerFilter;