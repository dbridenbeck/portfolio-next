import styled from 'styled-components';
import { ReactElement } from 'react';

const StyledLayout = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 1.667%;
  height: 100%;
  max-width: 650px;
`;

interface LayoutProps {
  children: ReactElement;
}

const Layout: React.FC<LayoutProps> = ({children}) => 
  <StyledLayout>
    {children}
  </StyledLayout>  

export default Layout;