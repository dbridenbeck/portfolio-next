export interface ProjectModel {
  title: string;
  type: string;
  tech: string[];
  goals: string;
  projectDetail: string;
  url: string;
}

export default interface AppStateModel {
  currentPage: string;
  indexToSelect: number;
  pages: [
    { pageName: string; color: string },
    { pageName: string; color: string },
    { pageName: string; color: string }
  ];
  infoText: {
    HELLO: { __html: string };
    ABOUT: { __html: string };
  };
  projects: [Project, Project, Project];
  pageClickedOnce: boolean;
}
