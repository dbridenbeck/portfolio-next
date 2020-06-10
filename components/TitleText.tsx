import styled from "styled-components";
import Head from "next/head";

const Title = styled.h1`
  position: relative;
  margin: 0;
  padding: 0;
  font-family: "Crimson Text", serif;
  font-weight: 200;
  line-height: 1em;
  border: 1px solid red;
`;

const SubTitle = styled.h2`
  position: relative;
  color: #333333;
  font-weight: bold;
  font-family: "Muli", sans-serif;
`;

const TitleText: React.FC = () => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Title>
        Darren Bridenbeck
      </Title>
      <SubTitle>Software Engineer</SubTitle>
    </>
  );
};

export default TitleText;
