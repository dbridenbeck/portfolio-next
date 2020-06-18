import AppStateModel from "../models/appState";

const whidbeyHerbalWebm = "../images/whidbeyHerbalWebm.webm";
const whidbeyHerbalMp4 = "../images/whidbeyHerbalMp4.mp4";
const whidbeyHerbalThumb = "../images/whidbeyHerbalThumb.jpg";
const chatAppWebm = "../images/chatAppWebm.webm";
const chatAppMp4 = "../images/chatAppMp4.mp4";
const chatAppThumb = "../images/chatAppThumb.jpg";
const taskManagerWebm = "../images/taskManagerWebm.webm";
const taskManagerMp4 = "../images/taskManagerMp4.mp4";
const taskManagerThumb = "../images/taskManagerThumb.jpg";

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
      thumb: `${whidbeyHerbalThumb}`,
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
      thumb: `${chatAppThumb}`,
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
      thumb: `${taskManagerThumb}`,
      thumbAlt: "",
    },
  ],
  pageClickedOnce: false,
};

export default initState;