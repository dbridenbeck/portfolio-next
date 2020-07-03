import React from "react";
import { render } from "@testing-library/react";
import TitleText from "./TitleText";

describe("TitleText", () => {
  it("should render without errors", () => {
    const { container } = render(<TitleText />);
    expect(container).toMatchSnapshot();
  });
});
