import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Navbar", () => {
  it("should render the Wrathfinder logo", () => {
    render(<Navbar />);
    const logo = screen.getByRole("img", { name: /wrathfinder logo/i });
    expect(logo).toBeInTheDocument();
  });
  it("should render the Wrathfinder wordmark", () => {
    render(<Navbar />);
    const wordmark = screen.getByRole("img", { name: /wrathfinder wordmark/i });
    expect(wordmark).toBeInTheDocument();
  });
  it.skip("should render the navigation bar", () => {});
});
