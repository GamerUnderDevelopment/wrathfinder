# Wrathfinder Project Context

## What is Wrathfinder?

Wrathfinder is a **web-based character planner** for Pathfinder: Wrath of the Righteous, a complex DnD-adjacent CRPG. The goal is to provide players with an intuitive tool to:

- Create and customize characters across multiple game systems
- View and understand how character stats, skills, and abilities interact
- Export/share character builds
- Support both new and experienced players in character optimization

## Non-Commercial License

This project is non-commercial — you cannot directly profit from the software. However:

- Donations are acceptable for funding development
- Open-source, community-driven development
- All code will be freely available

## Key Pathfinder Concepts

### Core Character Elements

- **Races:** Dwarf, Elf, Gnome, Half-Elf, Half-Orc, Halfling, Human (each with stat bonuses/penalties)
- **Classes:** Barbarian, Bard, Cleric, Druid, Fighter, Monk, Paladin, Ranger, Rogue, Sorcerer, Wizard, etc.
- **Attributes:** Strength, Dexterity, Constitution, Intelligence, Wisdom, Charisma (6 core stats)
- **Skills:** 35+ skills (Acrobatics, Arcana, Athletics, etc.), each tied to attributes and class
- **Feats:** Special abilities chosen at level-up, often with prerequisites
- **Spells:** Classes have spell lists with levels and requirements
- **Alignment:** Lawful/Neutral/Chaotic × Good/Neutral/Evil

### Character Progression

- **Levels:** 1-20 progression
- **Ability Score Increases:** At levels 4, 8, 12, 16, 20
- **Feat Selection:** At levels 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
- **Spell Slots:** Dependent on class, level, and attribute modifiers
- **HP:** Class-based + Constitution modifier per level

### Rules Complexity (Examples)

- Armor Class calculation: base + dexterity mod + armor bonus - armor penalty
- Attack bonus: base attack bonus + strength/dexterity mod + various modifiers
- Saving throws: attribute mod + proficiency bonus (or not) + various bonuses
- Skill checks: attribute mod + skill rank + class bonuses + feat bonuses

## Project Phases

### Phase 1: Core Character Creation (MVP)

**Goal:** Build a functional character sheet generator

- [ ] Character creation form (race, class, alignment)
- [ ] Ability score assignment (standard array, point buy, or roll)
- [ ] Automatic calculation of derived stats (modifiers, HP, AC)
- [ ] Basic character sheet display
- [ ] Save character data (in-memory first, database later)

**Out of scope for Phase 1:**

- Class-specific mechanics (spells, special abilities)
- Feat/skill selection
- Multi-classing
- Character export/sharing
- Database persistence

### Phase 2: Character Rules Engine

**Goal:** Implement Pathfinder rules validation and calculations

- [ ] Feat selection with prerequisite validation
- [ ] Skill assignment and training
- [ ] Class-specific mechanics (spellcasting, class features)
- [ ] Multi-classing support
- [ ] Hit point progression per level

### Phase 3: Persistence & Sync

**Goal:** Save characters permanently

- [ ] Database schema design
- [ ] Character save/load functionality
- [ ] User accounts (optional for Phase 1, revisit)
- [ ] Automatic save on changes

### Phase 4: Sharing & Export

**Goal:** Share characters outside the app

- [ ] Character export (PDF, JSON)
- [ ] Shareable character links
- [ ] Public character gallery
- [ ] Build notes/documentation per character

### Phase 5: Polish & Optimization

- [ ] Performance optimization
- [ ] Mobile responsiveness
- [ ] Accessibility (A11y) improvements
- [ ] Internationalization (i18n) if needed

## Architecture Approach

### Data Model

Start with a clear TypeScript interface for a character:

```typescript
interface Character {
  id: string;
  name: string;
  race: Race;
  class: Class;
  level: number;
  abilityScores: AbilityScores; // Str, Dex, Con, Int, Wis, Cha
  alignment: Alignment;
  feats: Feat[];
  skills: SkillRanks;
  spells?: SpellSelection;
  // ... other properties
}
```

### Business Logic

Create a `lib/pathfinder/` directory with pure functions for calculations:

- `calculateAbilityModifiers(abilityScores): Modifiers`
- `calculateArmorClass(armor, dex, feats): number`
- `validateFeatPrerequisites(feat, character): boolean`
- etc.

**No side effects, no external dependencies.** These are pure functions that can be unit tested easily.

### UI Components

React components for:

- Character creation form
- Character sheet viewer
- Race/class selector
- Feat selection interface
- etc.

### API Routes (Later)

Once basic functionality works, add API routes for:

- GET /api/characters (list)
- POST /api/characters (create)
- GET /api/characters/[id] (view)
- PUT /api/characters/[id] (update)
- DELETE /api/characters/[id] (delete)

### Database (Later)

When ready, use Drizzle with schema migrations:

```
characters table: id, name, race, class, level, data (JSON), createdAt, updatedAt
```

## Development Constraints

1. **Strict TDD:** Every feature has tests first
2. **SOLID architecture:** Code is extensible and maintainable
3. **YAGNI scope:** No features outside the current ticket
4. **Incremental:** Each phase is complete and deployable before moving to next
5. **Game accuracy:** Character calculations must match Pathfinder WotR rules exactly

## Success Criteria

**Phase 1 Success:**

- Generate a valid level-1 character with correct stats
- Display character sheet with all derived calculations
- Save/load character from UI

**Overall Success:**

- Character planner tool used and appreciated by Pathfinder community
- Open-source community contributions
- Sustainable with donation model if needed

## Resources Needed (As You Learn React)

- Pathfinder rule references: https://paizo.com/pathfinderRPG/prd/ (or WotR-specific docs)
- React documentation: https://react.dev
- Next.js documentation: https://nextjs.org/docs
- TypeScript handbook: https://www.typescriptlang.org/docs/

## Starting Point

Begin with **Phase 1, Story 1: Character Creation Form**

First task should be:

1. Initialize Next.js project with TypeScript + Tailwind ✓
2. Set up Jest + React Testing Library ✓
3. Create basic character data types
4. Write tests for character creation
5. Build React form component
