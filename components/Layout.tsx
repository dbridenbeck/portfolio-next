import styled from 'styled-components';
import { ReactElement } from 'react';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin: 0 auto -30px auto;
  padding: 1em 0 0 0;
  height: 100%;
  max-width: 650px;
  color: white;

  @media screen and (min-width: 1270px) {
    padding: 2em 0 0 0;
  }
`;

interface LayoutProps {
  children: ReactElement[];
}

const Layout: React.FC<LayoutProps> = ({children}) => 
  <StyledLayout>
    {children}
  </StyledLayout>  

export default Layout;