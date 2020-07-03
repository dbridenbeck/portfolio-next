import React from "react";
import { render } from "@testing-library/react";
import SkillsSection from "./SkillsSection";

describe("SkillsSection", () => {
  it("should render without errors", () => {
    const { container } = render(<SkillsSection />);
    expect(container).toMatchSnapshot();
  });
});
