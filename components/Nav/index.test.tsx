import React from "react";
import { render } from "@testing-library/react";
import { NavProps } from "../../models/navModel";
import Nav from "./index";

describe("Nav", () => {
  const requiredProps: NavProps = {
    pages: [
      {
        pageName: "portfolio",
        color: "#427ce6",
      },
      {
        pageName: "skills",
        color: "#6f59e9",
      },
      {
        pageName: "about",
        color: "#b0292e",
      },
    ],
    currentPage: "about",
    changePage: jest.fn(),
  };

  it("should render without errors", () => {
    const { container } = render(<Nav {...requiredProps} />);
    expect(container).toMatchSnapshot();
  });
});
