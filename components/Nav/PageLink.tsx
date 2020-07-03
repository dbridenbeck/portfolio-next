import styled from 'styled-components';
import { PageLinkProps } from "../../models/pageLinkModel";

const PageLinkSpan = styled.span`
  display: block;
  font-size: 1.125em;
  cursor: pointer;
  color: ${({ linkSelected, color }) => linkSelected ? color : "black"};
  :hover {
  color: ${({ color }) => color};
  }
`;

const PageLink: React.FC<PageLinkProps> = ({page, handleChangePage, currentPage}) => {
  const linkSelected = currentPage === page.pageName;
  const updatePage = () => handleChangePage(page.pageName);
  return (
    <>
      <PageLinkSpan 
        color={page.color}
        linkSelected={linkSelected}
        onClick={updatePage}
      >
        {page.pageName}
      </PageLinkSpan>
    </>
  )
};

export default PageLink;