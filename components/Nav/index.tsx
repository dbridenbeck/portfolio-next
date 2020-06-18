import styled from 'styled-components';
import PageLink from "./PageLink";
import { devices } from "../../utils/cssBreakpoints";

const NavContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 0.5% auto;
  z-index: 99;
  @media ${devices.tabletLandscape} {
    position: fixed;
    justify-content: space-between;
    bottom: 1.333%;
    right: 1.333%;
    width: 20%;
    min-width: 256px;
  }
`;

interface NavProps {
  currentPage: string;
  pages: [
    {pageName: string, color: string}, 
    {pageName: string, color: string}, 
    {pageName: string, color: string} 
  ];
  changePage: (text: string) => void;
}

const Nav: React.FC<NavProps> = ({
  currentPage,
  pages,
  changePage,
}) => (
  <NavContainer >
    {pages.map(page => (
      <PageLink 
        page={page}
        key={page.pageName}
        currentPage={currentPage}
        handleChangePage={changePage}
      />
    ))}
  </NavContainer>
);

export default Nav;
