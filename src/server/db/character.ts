import { db } from "~/server/db";
import { characters } from "./schema";

export const characterRepository = {
  create: async ({ name }: { name: string }) => {
    const [character] = await db
      .insert(characters)
      .values({ name })
      .returning();

    if (!character) { throw new Error("Failed to create character") };

    return character;
  },
};