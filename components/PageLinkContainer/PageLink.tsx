import styled from 'styled-components';

const PageLinkSpan = styled.span`
  display: block;
  font-size: 0.9em;
  font-style: italic;
  cursor: pointer;
  color: ${({ color }) => (color === "red" ? "#d13b40" : "#3bc9d1")};
`;

interface PageLinkProps {
  text: string;
  handleChangePage: (text: string) => void;
}

const PageLink = ({text, handleChangePage}) => (
  <>
    <PageLinkSpan 
      color="blue"
      onClick={() => handleChangePage(text)}
    >
      {text}
    </PageLinkSpan>
  </>
);

export default PageLink;