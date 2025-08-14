
# Copilot Instructions: Playwright + TypeScript Test Automation 

## Purpose

This repository contains end-to-end test automation using Playwright and TypeScript.

## Copilot Guidance

> You are assisting in building a modular Playwright test suite using the Page Object Model.
> Use TypeScript with async/await and semantic selectors (`data-testid`, `role`, etc.).
> Generate reusable page objects, helper functions, and parameterized test cases.
> Avoid hardcoded values. Prefer structured test data and centralized config.
> Include comments that explain test intent and expected outcomes.
> Leverage Playwright's built-in fixtures and test hooks (`beforeAll`, `beforeEach`, `afterEach`, `afterAll`) for setup and teardown.
> Use Playwright test annotations (`test.describe`, `test.skip`, `test.only`, `test.fixme`) for test management and organization.
> Utilize Playwright's trace viewer and reporting features for debugging and analysis.
> Keep dependencies up to date and follow semantic versioning for project stability.

## Folder Overview

- `/tests/` → Contains test cases organized by feature
- `/pages/` → Page Object classes for each screen
- `/utils/` → Reusable helpers and data providers

## Coding Conventions & Best Practices

- Use TypeScript with strict typing.
- Follow the Arrange–Act–Assert structure in tests.
- Use `expect()` for assertions.
- Centralize retries and waits in `/utils/`.
- Prefer modular, readable code with clear naming.
- Add a `env.json` file with the root URL of the site. Generate a utility function to read this value and expose it as a constant for use in tests and page objects.
- Use Playwright fixtures and hooks for setup/teardown (e.g., browser, context, page management).
- Organize tests with `test.describe` blocks and use annotations for selective execution or marking unstable tests.
- Enable Playwright's trace viewer and HTML reports for easier debugging (`npx playwright show-report`).
- Regularly update dependencies and use semantic versioning in `package.json`.

## Additional Recommendations

- Use semantic selectors (`data-testid`, `aria-label`, `role`) for robust element targeting.
- Parameterize test data and use data-driven testing where possible.
- Document test intent and expected outcomes with comments.
- Review and refactor page objects and helpers for reusability.

## Guardrails and Boundaries

- Do not overwrite existing test cases unless explicitly prompted.
- Always plan the test strategy before generating code.
- Ensure user acceptance or review before committing generated suggestions.
- Avoid deprecated patterns (e.g., `page.locator('div')`)—prefer semantic selectors (`getByRole`, `getByTestId`).
- Keep folder structure consistent with feature-based and Page Object Model conventions.
