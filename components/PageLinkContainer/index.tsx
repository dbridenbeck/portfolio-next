import styled from 'styled-components';
import PageLink from "./PageLink";
import { devices } from "../../utils/cssBreakpoints";

const LinkContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  z-index: 99;
  @media ${devices.mobileLandscape} {
    position: fixed;
    justify-content: space-between;
    bottom: 1.333%;
    right: 1.333%;
    width: 20%;
  }
`;

interface PageLinkContainerProps {
  currentPage: string;
  pages: [
    {pageName: string, color: string}, 
    {pageName: string, color: string}, 
    {pageName: string, color: string} 
  ];
  changePage: (text: string) => void;
}

const PageLinkContainer: React.FC<PageLinkContainerProps> = ({
  currentPage,
  pages,
  changePage,
}) => (
  <LinkContainer >
    {pages.map(page => (
      <PageLink 
        page={page}
        key={page.pageName}
        currentPage={currentPage}
        handleChangePage={changePage}
      />
    ))}
  </LinkContainer>
);

export default PageLinkContainer;
