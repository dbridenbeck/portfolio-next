import styled from 'styled-components';
import PageLink from "./PageLink";

const LinkContainer = styled.div`
  position: relative;
  display: flex;
  flex-grow: 0;
  justify-content: space-evenly;
  align-content: center;
  margin: 0 auto;
  width: 100%;
  height: 60px;
  font-size: 0.85em;
`;

interface PageLinkContainerProps {
  currentPage: string;
  pages: [string, string, string];
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
        text={page}
        key={page}
        handleChangePage={changePage}
      />
    ))}
  </LinkContainer>
);

export default PageLinkContainer;
