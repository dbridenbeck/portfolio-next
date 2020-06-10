import styled from "styled-components";

const TitleContainer = styled.div`
  padding-left: 4.667%;
`;

const Title = styled.h1`
  position: relative;
  margin: 0;
  padding: 0;
  font-size: 2.25rem;
  font-weight: 600;
  line-height: 1em;
`;

const SubTitle = styled.h2`
  position: relative;
  font-size: 1.75em;
  margin: 0;
  padding: 0;
  color: #333333;
  font-weight: normal;
`;

const TitleText: React.FC = () => {
  return (
    <TitleContainer>
      <Title>
        I'm Darren Bridenbeck,
      </Title>
      <SubTitle>a software engineer.</SubTitle>
    </TitleContainer>
  );
};

export default TitleText;
