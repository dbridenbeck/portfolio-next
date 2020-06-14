export interface ProjectModel {
  title: string;
  type: string;
  tech: string[];
  goals: string;
  projectDetail: string;
  url: string;
  color: string;
  gif: string;
  open: boolean;
}

export default interface AppStateModel {
  currentPage: string;
  pages: [
    { pageName: string; color: string },
    { pageName: string; color: string },
    { pageName: string; color: string }
  ];
  projects: ProjectModel[];
  pageClickedOnce: boolean;
}
