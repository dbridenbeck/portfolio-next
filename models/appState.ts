export interface ProjectModel {
  title: string;
  type: string;
  tech: string[];
  projectDetail: string;
  url: string;
  color: string;
  webm: string;
  mp4: string;
  open: boolean;
  thumb: string;
  thumbAlt: string;
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
