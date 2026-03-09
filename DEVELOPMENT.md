# Development Setup Guide

## Prerequisites

- **Node.js:** v18+ (LTS recommended)
- **pnpm:** Package manager (faster than npm/yarn)
- **Git:** For version control
- **VS Code:** Recommended editor with extensions

## Installation

### 1. Clone and Install Dependencies

```bash
git clone https://github.com/GamerUnderDevelopment/wrathfinder.git
cd wrathfinder
pnpm install
```

### 2. Verify Setup

```bash
# Run tests
pnpm test

# Type-check
pnpm type-check

# Lint
pnpm lint

# Build
pnpm build
```

All should pass with no errors.

## Project Scripts

```bash
# Development server
pnpm dev               # Start Next.js dev server (http://localhost:3000)

# Testing
pnpm test              # Run all tests (watch mode)
pnpm test:coverage     # Generate coverage report
pnpm test:ci           # Run tests once (CI mode)

# Code quality
pnpm lint              # Run ESLint
pnpm format            # Auto-format with Prettier
pnpm type-check        # TypeScript type checking

# Building
pnpm build             # Production build
pnpm start             # Start production server

# Database (when implemented)
pnpm db:migrate        # Run migrations
pnpm db:studio         # Open Drizzle Studio
```

## Recommended VS Code Extensions

- **ES7+ React/Redux/React-Native snippets** — dsznajder.es7-react-js-snippets
- **Prettier - Code Formatter** — esbenp.prettier-vscode
- **ESLint** — dbaeumer.vscode-eslint
- **Thunder Client** or **REST Client** — For testing API routes

## Getting Started

### 1. First Time Setup

Open the project in VS Code and accept the recommended extensions.

### 2. Create a New Feature Branch

```bash
git checkout -b feature/[TICKET-ID]-description main
```

Example:

```bash
git checkout -b feature/PF-1-character-creation-form main
```

### 3. Start Development

Before writing any code, write tests:

```bash
# Create test file: src/lib/__tests__/characterValidator.test.ts
pnpm test              # Tests run in watch mode, update as you code
```

### 4. Commit and Push

```bash
git add .
git commit -m "[PF-1] Skeleton: All tests for character validator

Create test file with all test cases defined as stubs.
Each test descriptor added but not yet implemented.
Jest will show X tests skipped/pending.

Closes #1"

git push origin feature/PF-1-character-creation-form
```

### 5. Create Pull Request

On GitHub, open a PR with:

- Ticket ID in title
- Link to ticket/project item
- Summary of changes
- How to test it

Wait for CI checks to pass, then merge.

## File Structure Reference

```
src/
├── app/
│   ├── layout.tsx          # Root layout (HTML structure)
│   ├── page.tsx            # Home page (/)
│   ├── api/                # API routes (serverless functions)
│   │   └── characters.ts   # Example: GET/POST /api/characters
│   ├── components/         # Page-specific components
├── components/             # Reusable React components
│   ├── CharacterForm.tsx
│   └── __tests__/
│       └── CharacterForm.test.tsx
├── lib/
│   ├── pathfinder/         # Game rule implementations
│   │   ├── character.ts    # Character logic
│   │   ├── races.ts        # Race definitions
│   │   ├── classes.ts      # Class definitions
│   │   └── __tests__/
│   ├── validation/         # Data validation
│   │   └── __tests__/
│   └── utils/              # General utilities
├── types/
│   ├── character.ts        # Character related types
│   ├── pathfinder.ts       # Pathfinder domain types
│   └── api.ts              # API request/response types
├── server/                 # Server-only code
│   ├── db/                 # Database setup (future)
│   └── api/                # Shared API logic
├── styles/
│   └── globals.css         # Global Tailwind styles
└── env.ts                  # Environment variables

tests/                      # Integration/E2E tests
.github/
└── workflows/              # CI/CD pipelines
    └── test.yml            # Run tests on PR
```

## Common Development Tasks

### Running Tests in Watch Mode

```bash
pnpm test
# Tests re-run when you save files
# Press 'a' to run all, 'f' to run failed, 'q' to quit
```

### Debugging a Failing Test

```bash
# Run a specific test file
pnpm test -- src/lib/__tests__/character.test.ts

# Run tests matching a pattern
pnpm test -- --testNamePattern="ability modifiers"

# With Node debugger
node --inspect-brk ./node_modules/.bin/jest --runInBand
# Then open chrome://inspect in Chrome browser
```

### Checking TypeScript Errors

```bash
pnpm type-check    # Shows all type errors
```

### Formatting Code

```bash
pnpm format         # Auto-format all files
pnpm format -- src/lib/character.ts  # Format specific file
```

### Checking Test Coverage

```bash
pnpm test:coverage

# View coverage report
open coverage/index.html    # macOS
# or
coverage/index.html         # Windows (open in browser)
```

## Troubleshooting

### "pnpm command not found"

Install pnpm globally:

```bash
npm install -g pnpm
```

### Tests fail after fresh install

Clear node_modules and reinstall:

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### TypeScript errors in editor but tests pass

Reload VS Code: Ctrl+K, Ctrl+R (or Cmd+K, Cmd+R on macOS)

### Port 3000 already in use

Find and kill the process:

```bash
# Windows PowerShell
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process

# Or just use a different port
pnpm dev -- -p 3001
```

## GitHub Projects Workflow

1. **Pull up the GitHub Projects board** for this repository
2. **Grab a ticket** from "Ready" column
3. **Create a feature branch** with the ticket ID
4. **Move ticket to "In Progress"**
5. **Code, test, commit** following SDLC
6. **Open PR and set ticket to "In Review"**
7. **Merge PR, move ticket to "Done"**

## Environment Variables

Create `.env.local` file in project root (copy from `.env.example` if it exists):

```env
# Add as needed
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Next Steps

1. Set up GitHub Projects board
2. Create your first story in GitHub Projects
3. Start with **Phase 1: Character Form tests**

---

**Happy coding!** Remember: Test first, code second.
