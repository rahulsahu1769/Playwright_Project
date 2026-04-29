# Playwright Learning Roadmap 2026

## Suggested Timeline

| Phase | Topic | Time (self-paced) |
|---|---|---|
| Phase 1 | Prerequisites | 1–2 weeks (skip if you know JS) |
| Phase 2 | Core Playwright | 2–3 weeks |
| Phase 3 | Intermediate | 2 weeks |
| Phase 4 | Advanced | 1–2 weeks |
| Phase 5 | CLI | 3–5 days |
| Phase 6 | MCP | 1 week |

---

## Phase 1 — Prerequisites (Foundation)

Before touching Playwright, make sure you're solid on:

- **JavaScript/TypeScript basics** — async/await, promises, modules, types
- **HTML/CSS fundamentals** — DOM structure, selectors, how browsers render pages
- **Node.js basics** — npm/npx, project structure, running scripts

---

## Phase 2 — Core Playwright (The Essentials) ✅

Study these in the official docs in this exact order:

1. **Installation & Setup** — `npx playwright install` → understand browsers (Chromium, Firefox, WebKit), config file structure
2. **Writing Your First Test** — Understand `test()`, `expect()`, and how tests are structured
3. **Locators** (most critical chapter) — Master all locator strategies in this priority order:
   - `getByRole()` → `getByLabel()` → `getByPlaceholder()` → `getByText()` → `getByTestId()`
   - CSS/XPath as last resort
   - Chaining and filtering locators
4. **Actions** — `click()`, `fill()`, `press()`, `selectOption()`, `hover()`, `dragTo()`, `check()`, file uploads
5. **Assertions** — `expect(locator).toBeVisible()`, `toHaveText()`, `toHaveValue()`, `toBeChecked()` — learn both soft and hard assertions
6. **Pages & Navigation** ✅ — `goto()`, `waitForURL()`, `reload()`, multiple tabs, popups, iframes
7. **Test Hooks & Fixtures** ✅ — `beforeAll`, `beforeEach`, `afterEach`, `afterAll`, and Playwright's built-in `page`, `context`, `browser` fixtures

---

## Phase 3 — Intermediate Concepts 🔄

8. **Page Object Model (POM)** ✅ — Structure your tests with reusable classes — the single biggest thing for maintainability
9. **Configuration (`playwright.config.ts`)** ✅ — Projects, base URLs, timeout settings, reporters, retries, parallelism, test sharding
10. **API Testing** — `request.get/post/put/delete()`, testing APIs directly, mixing API + UI in one test
11. **Debugging & Tracing**
    - Trace Viewer (`--trace on`)
    - `page.pause()` and inspector mode
    - `PWDEBUG=1`
    - `--ui` mode (interactive test runner)
12. **Network Interception** — `page.route()`, mocking API responses, aborting requests, modifying responses
13. **Screenshots & Visual Testing** — `toHaveScreenshot()`, snapshot comparisons, visual regression basics

---

## Phase 4 — Advanced Playwright

14. **Authentication** ✅ — `storageState` to persist login across tests, global setup files
15. **Codegen** — `npx playwright codegen <url>` — record tests and understand generated code
16. **Parallelism & Sharding** ✅ — Run tests across workers, shard across CI machines
17. **Custom Fixtures & Test Extensions** ✅ — Extend `test` with your own fixtures, dependency injection pattern
18. **CI/CD Integration** — GitHub Actions / GitLab CI setup, HTML reports, artifact uploads

---

## Phase 5 — Playwright CLI (`@playwright/cli`)

Once your fundamentals are solid, the CLI is the bridge to AI automation:

- Install: `npm install -g @playwright/cli`
- Understand commands: navigate, click, fill, screenshot, snapshot
- How it saves results to disk (vs. keeping in memory)
- Why it's ~4x more token-efficient than MCP (important for AI workflows)
- Use it manually first before plugging it into an agent

---

## Phase 6 — Playwright MCP (Master Level)

Now you're ready for MCP:

- Understand the Model Context Protocol — what it is and why it matters
- How Playwright MCP streams DOM snapshots + screenshots into an AI's context window
- Set up MCP server with Claude / Cursor / VS Code Copilot
- Understand the 3 built-in AI agents: plan → generate → heal
- Work through real tasks: give the agent a user story, watch it write + fix tests
- Self-healing test patterns (v1.56+)

---

## What You've Built So Far

```
Playwright_Project/
├── tests/
│   ├── pages/
│   │   ├── LoginPage.ts        ✅ POM for login page
│   │   ├── InventoryPage.ts    ✅ POM for inventory page
│   │   └── CartPage.ts         ✅ POM for cart page
│   ├── fixtures/
│   │   └── MyFixtures.ts       ✅ Extended test with reusable page objects
│   ├── global.setup.ts         ✅ Logs in once, saves session to auth.json
│   └── cart.spec.ts            ✅ 5 tests covering cart functionality
├── .env                        ✅ Credentials stored safely
├── .gitignore                  ✅ .env and auth.json excluded from Git
├── auth.json                   ✅ Saved login session (auto-generated)
└── playwright.config.ts        ✅ Parallelism, sharding, projects configured
```

---

## Key Concepts Covered

- **Page Object Model** — locators in constructor, actions in methods, `this` keyword
- **Fixtures** — `use()` as the dividing line between setup and teardown
- **Global Setup** — runs once before all tests, saves auth session
- **Environment Variables** — dotenv for safe credential management
- **Parallelism** — `workers` config, `fullyParallel`
- **Sharding** — `--shard=1/3` to split tests across machines
- **testIdAttribute** — configuring `data-test` vs `data-testid`

---

## Next Up

- **API Testing** (Phase 3, item 10) — `request` context, mixing API + UI tests
