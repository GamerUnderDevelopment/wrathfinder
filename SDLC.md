# Wrathfinder Development Process

## Development Principles

### 1. Test-Driven Development (TDD)

- **Strict from day one.** All code changes require tests written first.
- **Test layers:**
  - **Unit tests:** Game logic, calculations, character mechanics (Jest)
  - **Component tests:** React component behavior and rendering (React Testing Library)
  - **Integration tests:** API routes, database interactions (supertest or similar)
- **Test coverage minimum:** 80% for business logic, 70% overall
- **Red-Green-Refactor cycle:**
  1. Write failing test
  2. Implement minimal code to pass
  3. Refactor for clarity/efficiency

### 2. SOLID Principles

Applied strictly in architecture and code design:

- **Single Responsibility (S):** Each function/component has one reason to change
- **Open/Closed (O):** Open for extension, closed for modification (e.g., character classes, feats as plugins)
- **Liskov Substitution (L):** Interchangeable implementations across character types
- **Interface Segregation (I):** Minimal, focused interfaces between modules
- **Dependency Inversion (D):** Depend on abstractions, not concrete implementations

### 3. YAGNI (You Aren't Gonna Need It)

- **Scope enforcement:** Each ticket defines its scope; additional features require new tickets
- **Feature discovery:** If new scope emerges, stop work, create new ticket, reference original
- **No speculative code:** Only implement what the current ticket requires

## Workflow & Branching

### Branch Strategy (GitHub Flow)

- **main:** Production-ready code, must pass all tests
- **feature/[ticket-id]-description:** Feature branches from main
- **bugfix/[ticket-id]-description:** Bug fixes from main
- **Example:** `feature/epic-01-story-02-task-03-character-races`

### Commit Conventions

**General Pattern:**

```
[TICKET-ID] Brief description (50 chars max)

Detailed explanation if needed. Explain what and why, not how.
- Bullet point for complex changes
- Reference related issues/tickets

Closes #123 (if applicable)
```

**TDD Commit Sequence (Strict Pattern for Feature Development):**

All feature branches MUST follow this commit pattern:

1. **First Commit: Test Skeleton**

   ```
   [TICKET-ID] Skeleton: All tests for [feature name]

   Create test file with all test cases defined as stubs.
   Each test descriptor added but not yet implemented.
   Jest will show X tests skipped/pending.

   Closes #123
   ```

   - Creates the test file with all test function names
   - Tests are skipped (using `it.skip()` or `describe.skip()`)
   - No implementation at all
   - Allows team to see full test scope upfront

2. **Odd Commits: Test Descriptor - RED**

   ```
   [TICKET-ID] Test: [Test descriptor name] - RED

   Implement test logic (GIVEN/WHEN/THEN fully defined).
   Test fails (RED phase of Red-Green-Refactor).
   No implementation code added yet.

   Closes #123
   ```

   - Unskip one test and write its logic completely
   - Run tests: test FAILS (expected)
   - Commit message clearly identifies which test + RED state

3. **Even Commits: Implementation - GREEN**

   ```
   [TICKET-ID] Implement: [Feature name] - GREEN

   Minimal implementation to make [Test descriptor] pass.
   All tests now GREEN.
   No refactoring, no extra features.

   Closes #123
   ```

   - Write minimal code to pass the failing test
   - Run tests: test PASSES (expected)
   - Only refactor if previous steps allow
   - Move to next test

**Example Commit Sequence for a Task:**

```
1. [PF-42] Skeleton: All tests for ability score modifier calculation
2. [PF-42] Test: Calculate modifier for strength 10 - RED
3. [PF-42] Implement: Return 0 for ability score 10 - GREEN
4. [PF-42] Test: Calculate modifier for strength 18 - RED
5. [PF-42] Implement: Return +4 for ability score 18 - GREEN
6. [PF-42] Test: Calculate modifier for strength 8 - RED
7. [PF-42] Implement: Return -1 for ability score 8 - GREEN
8. [PF-42] Refactor: Consolidate modifier calculation logic - ALL GREEN
```

**Why This Pattern:**

- **Visibility:** Team can see exact test scope at commit 1
- **Verifiability:** Each implementation commit has matching RED commit
- **History:** Git history tells the story of development
- **Accountability:** Easy to see which tests were added and when they passed
- **TDD Discipline:** Enforces tests-first thinking

### Pull Request Process

1. **Branch created from `main`**
2. **All tests passing locally** before pushing
3. **Self-review** before creating PR
4. **PR description includes:**
   - Ticket ID
   - What was implemented
   - How to test it
   - Any design decisions/tradeoffs
5. **All CI checks pass** (tests, linting)
6. **Merge** (squash if many commits, or rebase to keep history clean)

## Testing Strategy

### Test File Organization

```
src/
├── components/
│   ├── CharacterForm.tsx
│   └── __tests__/
│       └── CharacterForm.test.tsx
├── lib/
│   ├── characterCalculations.ts
│   └── __tests__/
│       └── characterCalculations.test.ts
├── app/
│   ├── api/
│   │   ├── characters.ts
│   │   └── __tests__/
│   │       └── characters.test.ts
```

### Test Writing Standards

- **Descriptive test names:** `it('should calculate ability modifiers correctly for strength 16')`
- **Arrange-Act-Assert pattern:** Clear setup, action, verification
- **No test interdependencies:** Each test is independent
- **Mock external dependencies:** Database, APIs, third-party services
- **Test behavior, not implementation:** Tests should pass if behavior is correct, regardless of internal changes

### Coverage Requirements

- Run tests with coverage: `pnpm test:coverage`
- Aim for:
  - 90%+ for game logic (core business rules)
  - 80%+ for API handlers
  - 70%+ overall project coverage

## Code Style & Quality

### TypeScript

- **Strict mode:** Enabled in tsconfig.json
- **No `any`:** Use union types, generics, or proper interfaces instead
- **Explicit return types:** Functions must declare return types
- **Interfaces over types:** For object shapes (easier to extend)

### React & Components

- **Functional components** with hooks only
- **Props interfaces:** Define explicit prop types
- **Avoid prop drilling:** Use Context API or state management if > 2 levels
- **One component per file** (unless tightly coupled)
- **Meaningful component names:** Reflect purpose, not structure

### Linting & Formatting

- **ESLint:** Enforces code quality, TypeScript best practices
- **Prettier:** Auto-formats code on save
- **Pre-commit hooks:** Run tests and linting before commit (husky)
- Run checks: `pnpm lint` and `pnpm format`

## Project Structure

```
wrathfinder/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── api/                # API routes
│   ├── components/             # React components
│   │   └── __tests__/
│   ├── lib/                    # Utilities, helpers, logic
│   │   ├── pathfinder/         # Game mechanics (character rules, calculations)
│   │   ├── validation/         # Data validation
│   │   └── __tests__/
│   ├── types/                  # TypeScript type definitions
│   ├── styles/                 # Global styles
│   ├── public/                 # Static assets
│   └── server/                 # Server-only code (DB, APIs)
│       ├── db/
│       └── api/
├── tests/                      # Integration/e2e tests
├── .github/
│   └── workflows/              # CI/CD
├── SDLC.md
├── PROJECT_CONTEXT.md
├── DEVELOPMENT.md
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── jest.config.js
└── prettier.config.js
```

## GitHub Projects Setup

### Board Structure

- **View:** Table view for tracking all work
- **Column/Status:**
  - Backlog (not started)
  - Ready (blocked by nothing, clear requirements)
  - In Progress (actively being worked)
  - In Review (PR open, awaiting review)
  - Done (merged to main, closed)

### Epics

Major feature areas or game systems:

- Core Character Creation
- Character Sheet Display
- Pathfinder Rules Engine
- Data Persistence & Sync
- Character Sharing/Export

### Stories

User-facing features under an Epic (spans multiple tasks).

**Story Structure (Required):**

Each story MUST include:

1. **User Story Statement:**

   ```
   As a [entity/user]
   I should [action/capability]
   So that [business value/outcome]
   ```

   Example:

   ```
   As a player creating a character
   I should select a race and see stat modifiers applied
   So that I understand how my race choice affects my character
   ```

2. **Gherkin Scenarios:**

   ```
   Scenario: [Scenario name]
   GIVEN [precondition/initial state]
   WHEN [user action/event]
   THEN [expected outcome]
   ```

   Example:

   ```
   Scenario: Selecting Dwarf race applies stat modifiers
   GIVEN I am on the character creation form
   WHEN I select Dwarf as my race
   THEN I should see +2 Constitution, -2 Charisma displayed
   ```

3. **Integration Test Manifest:**
   List all integration tests expected for this story:
   ```
   Integration Tests:
   - [ ] Database stores selected race with character
   - [ ] API /characters endpoint returns correct race data
   - [ ] UI reflects race selection across all relevant fields
   - [ ] Stat recalculation triggers on race change
   ```

Example story structure:

```markdown
## Story: Character Race Selection

### User Story

As a player creating a character
I should select a race and see stat modifiers applied
So that I understand how my race choice affects my character

### Scenarios

Scenario: Selecting Dwarf applies correct stat modifiers
GIVEN I am on the character creation form with no race selected
WHEN I click the race dropdown and select "Dwarf"
THEN the stat display should show +2 Constitution and -2 Charisma

Scenario: Changing race updates character preview
GIVEN I have selected Elf as my race
WHEN I change the selection to Human
THEN all stat modifiers should recalculate and display is updated

### Integration Test Manifest

- [ ] Database schema correctly stores race_id on character
- [ ] API POST /api/characters accepts and stores race selection
- [ ] API GET /api/characters/[id] returns race with modifiers
- [ ] CharacterForm component renders race selector
- [ ] StatDisplay component updates when race prop changes
- [ ] Character calculation engine applies race modifiers correctly
```

### Tasks

Atomic, specific work items (1-2 days max):

- `Epic: Core Character Creation > Story: Character Race Selection > Task: Implement Dwarf race data`
- **Required fields:**
  - Title (clear deliverable)
  - Description (what & why)
  - Acceptance criteria (how to verify)
  - Estimated effort
  - Labels (component, bug, ui, logic, etc.)

## Definition of Done (Per Ticket)

A ticket is done when:

- [ ] Tests written (TDD), all passing
- [ ] Code follows SOLID principles
- [ ] No unnecessary features (YAGNI)
- [ ] Code reviewed (self + ideally peer if available)
- [ ] Linting & formatting checks pass
- [ ] Commit message clear and references ticket
- [ ] PR merged to main

## Continuous Integration

### Checks Run on Every PR

1. **Tests:** `pnpm test`
2. **Linting:** `pnpm lint`
3. **Type check:** `pnpm type-check`
4. **Build:** `pnpm build`

### Local Pre-Commit Checks

Install husky + lint-staged for automatic checks before commit.

## Key Takeaways

- **TDD is not optional.** Every feature starts with a test.
- **SOLID is a constraint.** Think about extensibility from the first line of code.
- **YAGNI prevents waste.** Scope per ticket, stay disciplined.
- **GitHub Projects is the single source of truth.** Check it before starting work.
- **Tests are documentation.** Well-written tests explain system behavior.
