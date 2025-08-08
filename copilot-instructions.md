# 🤖 Copilot Instructions: Playwright + TypeScript QA Automation

## 🎯 Purpose

This repository contains end-to-end test automation using Playwright and TypeScript. It targets key user journeys such as login, provider search, and file upload.

## 🧩 Copilot Guidance

> You are assisting in building a modular Playwright test suite using Page Object Model.
> Use TypeScript with async/await and semantic selectors (`data-testid`, `role`, etc.).
> Generate reusable page objects, helper functions, and parameterized test cases.
> Avoid hardcoded values. Prefer structured test data and centralized config.
> Include comments that explain test intent and expected outcomes.

## 📁 Folder Overview

/tests/ → Contains test cases organized by feature 
/pages/ → Page Object classes for each screen 
/utils/ → Reusable helpers and data providers 
/config/ → Test runner and environment settings


## ✅ Coding Conventions

- Use `expect()` for assertions.
- Follow Arrange–Act–Assert structure.
- Centralize retries and waits in `/utils/`.
- Prefer modular, readable code with clear naming.

- Add a config/env.json file with the root URL of the site (e.g., https://automationexercise.com)
- Generate a utility function to read this value and expose it as a constant for use in tests and page objects.
