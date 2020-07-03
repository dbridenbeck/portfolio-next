import React from "react";
import { render } from "@testing-library/react";
import { ProjectInfoProps } from "../../models/ProjectInfoModel";
import ProjectInfo from "./ProjectInfo";

describe("ProjectInfo", () => {
  it("should render without errors", () => {
    const requiredProps: ProjectInfoProps = {
      project: {
        title: "Whidbey Herbal",
        type: "eCommerce Website",
        tech: ["React", "Redux", "Styled-Components", "Shopify API"],
        projectDetail:
          "The client's goal was to limit their reliance on Shopify by having a custom site and use images to tell their story. It was fun implementing a design file into a pixel-perfect responsive site and managing state for checkout. Roadmap is to migrate to Nextjs and add route animations.",
        url: "http://whidbeyherbal.com",
        color: "#9686ef",
        webm: `an image`,
        mp4: `an image`,
        open: false,
        thumb: `an image`,
        thumbAlt: "",
      },
    };

    const { container } = render(<ProjectInfo {...requiredProps} />);
    expect(container).toMatchSnapshot();
  });
});
