import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";

describe("Navbar", () => {
  it("should render the Wrathfinder logo", () => {
    render(<Navbar />);
    const logo = screen.getByRole("img", { name: /wrathfinder logo/i });
  });
  it.skip("should render the Wrathfinder wordmark", () => {});
  it.skip("should render the navigation bar", () => {});
});
