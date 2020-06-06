import styled from 'styled-components';
import PageLink from "./PageLink";

const LinkContainer = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: 4%;
  font-size: 0.85em;
  z-index: 99;
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
