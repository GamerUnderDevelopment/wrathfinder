// @vitest-environment node
import { afterEach, describe, it } from "vitest";
import { db } from "~/server/db";
import { characterRepository } from "~/server/db/character";

describe("Character", () => {
  afterEach(async () => {
    await db.character.deleteMany();
  });
  it("should create a character with a name", async () => {
    const character = await characterRepository.create({
      name: "Aldric " 
    });
  });
  it.skip("should generate a UUID on creation", () => {
    //
  });
  it.skip("should default status to active", () => {
    //
  });
  it.skip("should allow owner to be null", () => {
    //
  });
});