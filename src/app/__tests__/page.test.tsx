import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../page";

describe("Landing Page /", () => {
  it("should render the navigation bar", () => {
    render(<Home />);
    const navbar = screen.getByRole("navigation", { name: /primary/i });
    expect(navbar).toBeInTheDocument();
  });
  it("should render a call to action to create a character", () => {
    render(<Home />);
    const cta = screen.getByRole("link", { name: /create a character/i });
    expect(cta).toBeInTheDocument();
  });
  it.skip("should render the call to action to sign up", () => {
    render(<Home />);
    const cta = screen.getByRole("link", { name: /sign up/i });
    expect(cta).toBeInTheDocument();
  });
  it("should render a call to action to sign in", () => {
    render(<Home />);
    const cta = screen.getByRole("link", { name: /sign in/i });
    expect(cta).toBeInTheDocument();
  });
});
