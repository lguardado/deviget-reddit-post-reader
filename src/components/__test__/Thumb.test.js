import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Thumb from "../Thumb/Thumb";

describe("<Thumb />", () => {
  beforeAll(() => {
    cleanup();
  });
  test("Shows a thumbnail when there is a link", () => {
    render(<Thumb source={"testurl"} />);
    expect(screen.queryByRole("img")).toMatchInlineSnapshot(`
      <img
        alt=""
        src="testurl"
      />
    `);
  });

  test("Shows a 'No Image' when there is no link passed to it", () => {
    render(<Thumb />);
    expect(screen.queryByText(/No Image/)).toMatchInlineSnapshot(`
      <div>
        No Image
      </div>
    `);
  });
});
