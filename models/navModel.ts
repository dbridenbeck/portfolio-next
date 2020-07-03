export interface NavProps {
  currentPage: string;
  pages: [
    { pageName: string; color: string },
    { pageName: string; color: string },
    { pageName: string; color: string }
  ];
  changePage: (text: string) => void;
}
