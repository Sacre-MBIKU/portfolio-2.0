/* eslint-disable no-undef */
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SectionTitle from "./SectionTitle";

it("renders correctly", () => {
  const container = render(<SectionTitle title="Section Title" />);
  expect(container).toMatchSnapshot();
});
