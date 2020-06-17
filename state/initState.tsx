import AppStateModel from "../models/appState";

// To Tyler: in projects, I'm storing these paths to their respective webm / mp4 files
const whidbeyHerbalWebm = "../images/whidbeyHerbalWebm.webm";
const chatAppWebm = "../images/chatAppWebm.webm";
const taskManagerWebm = "../images/taskManagerWebm.webm";
const whidbeyHerbalMp4 = "../images/whidbeyHerbalMp4.mp4";
const chatAppMp4 = "../images/chatAppMp4.mp4";
const taskManagerMp4 = "../images/taskManagerMp4.mp4";

const initState: AppStateModel = {
  currentPage: "portfolio",
  pages: [
    {
      pageName: "portfolio",
      color: "#427ce6",
    },
    {
      pageName: "skills",
      color: "#6f59e9",
    },
    {
      pageName: "about",
      color: "#b0292e",
    },
  ],
  projects: [
    {
      title: "Whidbey Herbal",
      type: "eCommerce Website",
      tech: ["React", "Redux", "Styled-Components", "Shopify API"],
      goals:
        "Remove reliance on Shopify theme by building a custom site, tell “the story” of the brand through images and photos",
      projectDetail:
        "Implemented designer’s files into pixel-perfect responsive site, seamlessly manage state for checkout",
      url: "http://whidbeyherbal.com",
      color: "#9686ef",
      webm: `${whidbeyHerbalWebm}`,
      mp4: `${whidbeyHerbalMp4}`,
      open: false,
      thumb:
        "https://www.publicdomainpictures.net/pictures/30000/velka/solid-green-background.jpg",
      thumbAlt: "",
    },
    {
      title: "Chat App",
      type: "Realtime Chat Application",
      tech: ["NodeJS", "Express", "Socket.io", "Handlebars"],
      goals:
        "Build a chat app that supports multiple rooms, location sharing, and ensuring usernames are unique within a given room",
      projectDetail:
        "Used Socket.io for realtime communication, Handlebars for UI templating",
      url: "https://secret-hollows-65310.herokuapp.com/",
      color: "#6f9bec",
      webm: `${chatAppWebm}`,
      mp4: `${chatAppMp4}`,
      open: false,
      thumb:
        "https://www.publicdomainpictures.net/pictures/30000/velka/solid-green-background.jpg",
      thumbAlt: "",
    },
    {
      title: "Task Manager",
      type: "Auth Enabled CRUD API",
      tech: ["NodeJS", "Express", "MongoDB", "Multer", "JWT"],
      goals:
        "Create an API that handles CRUD operations on users, tasks and avatar images, using auth to limit users to only see their own tasks",
      projectDetail:
        "I handled the DB config, building the API, JWT for auth, and using Multer for form-data",
      url: "https://github.com/dbridenbeck/task-manager-api",
      color: "#d13b40",
      webm: `${taskManagerWebm}`,
      mp4: `${taskManagerMp4}`,
      open: false,
      thumb:
        "https://image.shutterstock.com/image-photo/orange-fruit-slices-leaves-isolated-260nw-1386912362.jpg",
      thumbAlt: "",
    },
  ],
  pageClickedOnce: false,
};

export default initState;