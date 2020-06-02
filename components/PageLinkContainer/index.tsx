import PageLink from "./PageLink";
import PageArrow from "./PageArrow";

interface PageLinkContainerProps {
  onHelloPage: boolean;
  handleTogglePane: () => void;
}

const PageLinkContainer: React.FC<PageLinkContainerProps> = ({
  onHelloPage,
  handleTogglePane,
}) => (
  <>
    <div 
      onClick={() => handleTogglePane()}
      className="link-container"
    >
      <PageLink onHelloPage={onHelloPage} />
      <PageArrow onHelloPage={onHelloPage} />
    </div>
    <style jsx>{`
          .link-container {
            position: relative;
            display: block;
            bottom: 0px;
            margin: 0 auto;
            left: 0;
            right: 0;
            max-width: 650px;
            height: 30px;
            font-size: 0.85em;
          }
        `}
    </style>
  </>
);

export default PageLinkContainer;
