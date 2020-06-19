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
      projectDetail:
        "The client's goal was to limit their reliance on Shopify by having a custom site and use images to tell their story. It was fun implementing a design file into a pixel-perfect responsive site and managing state for checkout. Roadmap is to migrate to Nextjs and add route animations.",
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
      projectDetail:
        "I built a chat app that supports multiple rooms, location sharing, and ensuring usernames are unique within a given room. Using Socket.io for realtime communication was my favorite part of this project, although eventually I would like to switch the frontend to React.",
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
      projectDetail:
        "I created an API for making CRUD operations on users, tasks and avatar images. User auth was handled with JWT to limit actions to only their resources. I love making API's in general, but really enjoyed working with MongoDB and using Multer to handle user avatars.",
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
