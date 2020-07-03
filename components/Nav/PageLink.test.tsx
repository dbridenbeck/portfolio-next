import React from 'react';
import { render } from '@testing-library/react';
import PageLink from './PageLink';
import { PageLinkProps } from "../../models/pageLinkModel";

describe("PageLink", () => {
  const requiredProps: PageLinkProps = {
    page: {
      pageName: "skills",
       color: "#6f59e9"
      },
    currentPage: "about",
    handleChangePage: jest.fn(),
  };
  
  it("should render without errors", () => {
    const { container } = render(<PageLink {...requiredProps} />);
    expect(container).toMatchSnapshot();
  }); 
});