import styled from 'styled-components';

const PageLinkSpan = styled.span`
  display: block;
  font-size: 0.9em;
  font-style: italic;
  cursor: pointer;
  color: ${({ linkSelected, color }) => linkSelected ? color : "black"};
  :hover {
  color: ${({ color }) => color};
  }
`;

interface PageLinkProps {
  page: {pageName: string, color: string};
  currentPage: string;
  handleChangePage: (text: string) => void;
}

const PageLink = ({page, handleChangePage, currentPage}) => {
  const linkSelected = currentPage === page.pageName;
  return (
    <>
      <PageLinkSpan 
        color={page.color}
        linkSelected={linkSelected}
        onClick={() => handleChangePage(page.pageName)}
      >
        {page.pageName}
      </PageLinkSpan>
    </>
  )
};

export default PageLink;