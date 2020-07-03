export interface PageLinkProps {
  page: { pageName: string; color: string };
  currentPage: string;
  handleChangePage: (text: string) => void;
}
