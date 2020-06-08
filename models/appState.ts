export interface ProjectModel {
  title: string;
  type: string;
  tech: string[];
  goals: string;
  projectDetail: string;
  url: string;
  color: string;
  gif: string;
}

export default interface AppStateModel {
  currentPage: string;
  projectHoveredIndex: number;
  indexToSelect: number;
  pages: [
    { pageName: string; color: string },
    { pageName: string; color: string },
    { pageName: string; color: string }
  ];
  infoText: {
    SKILLS: { __html: string };
    ABOUT: { __html: string };
  };
  projects: [ProjectModel, ProjectModel, ProjectModel];
  pageClickedOnce: boolean;
}
