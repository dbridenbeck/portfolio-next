import styled from 'styled-components';
import { ReactElement } from 'react';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 auto -30px auto;
  height: 100%;
  max-width: 650px;
  color: white;
`;

interface LayoutProps {
  children: ReactElement;
}

const Layout: React.FC<LayoutProps> = ({children}) => 
  <StyledLayout>
    {children}
  </StyledLayout>  

export default Layout;