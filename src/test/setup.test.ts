import { describe, it, expect } from "vitest";

describe("Vitest setup", () => {
  it("should run a test successfully", () => {
      expect(true).toBe(true);
  });
  it("should have access to jest-dom matchers", () => {
    const element = document.createElement("div");
    document.body.appendChild(element);
    expect(element).toBeInTheDocument();
  });
});