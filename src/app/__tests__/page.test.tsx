import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Landing Page /", () => {
  it.skip("should render the navigation bar", () => {
    //
  });
  it("should render a call to action to create a character", () => {
    render(<Home />);
    const cta = screen.getByRole("link", { name: /create a character/i });
    expect(cta).toBeInTheDocument();
  });
  it("should render a call to action to sign in", () => {
    render(<Home />);
    const cta = screen.getByRole("link", { name: /sign in/i });
    expect(cta).toBeInTheDocument();
  });
});
