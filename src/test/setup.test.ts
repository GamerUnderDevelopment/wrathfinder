import { describe, it, expect } from "vitest";

describe("Vitest setup", () => {
  it("should run a test successfully", () => {
      expect(true).toBe(true);
  });
  it.skip("should have access to jest-dom matchers", () => {});
});