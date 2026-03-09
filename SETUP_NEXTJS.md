# Next.js Project Setup Reference

This document provided the guide for initializing the Next.js project with TypeScript, Tailwind CSS, Jest, and ESLint. Setup is now complete.

## What Was Initialized

✓ Next.js 16 with TypeScript  
✓ Tailwind CSS 4 with PostCSS  
✓ ESLint with Next.js config  
✓ Jest 30 with React Testing Library  
✓ Prettier for code formatting  
✓ Strict TypeScript configuration  
✓ Directory structure for organized code

## Current Setup Summary

### Dependencies Installed

- **next:** 16.1.6
- **react:** 19.2.3
- **react-dom:** 19.2.3
- **tailwindcss:** 4.2.1
- **typescript:** 5.9.3

### Dev Dependencies Installed

- **jest:** 30.2.0
- **@testing-library/react:** 16.3.2
- **@testing-library/jest-dom:** 6.9.1
- **eslint:** 9.39.4
- **prettier:** 3.8.1

### Configuration Files Created

- **jest.config.js** — Jest configuration for testing
- **jest.setup.js** — Jest setup file importing testing utilities
- **prettier.config.js** — Prettier code formatting rules
- **tsconfig.json** — TypeScript strict mode configuration
- **tailwind.config.ts** — Tailwind CSS configuration
- **next.config.ts** — Next.js configuration

### npm Scripts Available

```
pnpm dev              # Development server (http://localhost:3000)
pnpm build            # Production build
pnpm start            # Start production server
pnpm test             # Run tests in watch mode
pnpm test:ci          # Run tests once (CI mode)
pnpm test:coverage    # Generate coverage report
pnpm lint             # Run ESLint
pnpm format           # Auto-format code with Prettier
pnpm type-check       # Check TypeScript types
```

## Project Structure

```
wrathfinder/
├── src/
│   ├── app/                    # Next.js app directory (routes)
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── api/                # API routes
│   ├── components/             # Reusable React components
│   │   └── __tests__/
│   ├── lib/                    # Utilities and business logic
│   │   ├── pathfinder/         # Game mechanics
│   │   ├── validation/         # Data validation
│   │   └── __tests__/
│   ├── types/                  # TypeScript type definitions
│   ├── styles/                 # Global styles
│   ├── server/                 # Server-only code
│   │   ├── db/
│   │   └── api/
│   └── public/                 # Static assets
├── tests/                      # Integration/E2E tests
├── jest.config.js              # Jest configuration
├── jest.setup.js               # Jest setup
├── tsconfig.json               # TypeScript strict config
├── tailwind.config.ts
├── next.config.ts
├── prettier.config.js
├── SDLC.md                     # Development process
├── PROJECT_CONTEXT.md          # Project overview
├── DEVELOPMENT.md              # Development guide
└── package.json
```

## Verify Installation

```bash
# Run tests (should pass example test)
pnpm test

# Check types
pnpm type-check

# Lint check
pnpm lint

# Build
pnpm build

# Start dev server
pnpm dev
# Should be accessible at http://localhost:3000
```

## Next Steps

1. **Set up GitHub Projects board** with Phase 1 epics and stories
2. **Create first ticket** for character data model
3. **Start TDD workflow:**
   - Skeleton commit with all tests
   - RED commits for each test
   - GREEN commits for implementations
4. Begin building Phase 1: Core Character Creation

## Key Files to Know

- **jest.config.js** — Controls test runner, paths, coverage settings
- **tsconfig.json** — Strict TypeScript rules enforced here
- **prettier.config.js** — Code formatting rules (100 char width, single quotes)
- **.eslintrc.json** — Code quality rules
- **SDLC.md** — Reference for testing, commit, and branching patterns

## Important Notes

### TypeScript Strict Mode

All compiler options are strict. No `any` types allowed. This is intentional for code quality.

### Testing Strategy

- Unit tests in `__tests__/` folders next to source files
- Integration tests in `tests/` folder
- Jest in watch mode during development
- Coverage reports with `pnpm test:coverage`

### Commit Pattern (Enforced)

1. Test Skeleton — All test stubs
2. Test: [Name] - RED — Failing test
3. Implement: [Feature] - GREEN — Passing code
4. Repeat until all tests green
5. Refactor if needed (keep all green)

See SDLC.md for detailed commit message format.

---

**Setup complete. Ready to start building Wrathfinder!**
