import Head from "next/head";
import styled from "styled-components";
import { ReactElement } from "react";

const StyledLayout = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 1.667%;
  height: 100%;
  max-width: 650px;
  font-family: "Muli", sans-serif;
  font-style: normal;
`;

interface LayoutProps {
  children: ReactElement[];
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Muli:wght@300;400;600&display=swap"
        rel="stylesheet"
      />
    </Head>
    <StyledLayout>{children}</StyledLayout>
  </>
);
export default Layout;
