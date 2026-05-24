// @vitest-environment node
import { afterEach, describe, expect, it } from "vitest";
import { db } from "~/server/db";
import { characters } from "~/server/db/schema";
import { characterRepository } from "~/server/db/character";

describe("Character", () => {
  afterEach(async () => {
    await db.delete(characters);
  });

  it("should create a character with a name", async () => {
    const character = await characterRepository.create({ name: "Test Character" });
    expect(character).toHaveProperty("id");
    expect(character.name).toBe("Test Character");
  });
  it("should generate a UUID on creation", async () => {
    const character = await characterRepository.create({ name: "Aldric" });
    expect(character.characterUuid).toBeDefined();
    expect(character.characterUuid).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    );
  });
  it("should default status to active", async () => {
    const character = await characterRepository.create({ name: "Aldric" });
    expect(character.status).toBeDefined();
    expect(character.status).toBe("active");
  });
  it("should allow owner to be null", async () => {
    const character = await characterRepository.create({ name: "Aldric" });
    expect(character.ownerUserId).toBeDefined();
    expect(character.ownerUserId).toBeNull();
  });
});