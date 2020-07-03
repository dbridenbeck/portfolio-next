import React from "react";
import { render } from "@testing-library/react";
import AboutSection from "./AboutSection";

describe("AboutSection", () => {
  it("should render without errors", () => {
    const { container } = render(<AboutSection />);
    expect(container).toMatchSnapshot();
  });
});
