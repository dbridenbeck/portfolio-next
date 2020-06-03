import styled from 'styled-components';
import PageLink from "./PageLink";
import PageArrow from "./PageArrow";

const LinkContainer = styled.div`
  position: relative;
  display: block;
  bottom: 0px;
  margin: 0 auto;
  left: 0;
  right: 0;
  max-width: 650px;
  height: 30px;
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
    className="link-container"
  >
    <PageLink onHelloPage={onHelloPage} />
    <PageArrow onHelloPage={onHelloPage} />
  </LinkContainer>

export default PageLinkContainer;
