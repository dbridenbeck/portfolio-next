import styled from "styled-components";

const InfoTextContainer = styled.div`
  position: relative;
  left: 0;
  right: 0;
  margin: 10px auto 0 auto;
  font-family: "Muli", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.5em;
  width: 95%;
  color: #d4d4e4;
  @media screen and (min-width: 1270px) {
    width: 80%;
    margin: 0 auto;
    font-size: 0.875rem;
  }
`;

interface InfoTextProps {
  infoText: {__html: string};
}

const InfoText: React.FC<InfoTextProps> = ({
  infoText,
}) => (
    <InfoTextContainer
      dangerouslySetInnerHTML={infoText}
    ></InfoTextContainer>
);

export default InfoText;