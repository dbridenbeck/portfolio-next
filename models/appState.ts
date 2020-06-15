export interface ProjectModel {
  title: string;
  type: string;
  tech: string[];
  goals: string;
  projectDetail: string;
  url: string;
  color: string;
  webm: string;
  mp4: string;
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
