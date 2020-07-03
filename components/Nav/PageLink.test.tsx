import React from 'react';
import { render } from '@testing-library/react';
import PageLink from './PageLink';

interface PageLinkProps {
  page: {pageName: string, color: string};
  currentPage: string;
  handleChangePage: (text: string) => void;
}

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