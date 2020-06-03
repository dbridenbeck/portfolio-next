import styled from 'styled-components';
import PageLink from "./PageLink";
import PageArrow from "./PageArrow";

const LinkContainer = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 60px;
  font-size: 0.85em;
`;

interface PageLinkContainerProps {
  onHelloPage: boolean;
  handleTogglePane: () => void;
}

const PageLinkContainer: React.FC<PageLinkContainerProps> = ({
  onHelloPage,
  handleTogglePane,
}) =>
  <LinkContainer 
    onClick={() => handleTogglePane()}
  > 
    <PageLink onHelloPage={onHelloPage} />
    <PageArrow onHelloPage={onHelloPage} /> 
  </LinkContainer>

export default PageLinkContainer;
