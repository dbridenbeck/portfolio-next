import styled from 'styled-components';
import PageLink from "./PageLink";

const LinkContainer = styled.div`
  position: fixed;
  bottom: 1.333%;
  right: 1.333%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 20%;
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
