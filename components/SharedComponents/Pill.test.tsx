import React from "react";
import { render } from "@testing-library/react";
import { PillProps } from "../../models/pillModel";
import Pill from "./Pill";

describe("Pill", () => {
  it("should render without errors", () => {
    const requiredProps: PillProps = {
      children: "React",
      setMargin: "0 0.75em 0 0",
    };
    const { container } = render(<Pill {...requiredProps}/>);
    expect(container).toMatchSnapshot();
  });
});