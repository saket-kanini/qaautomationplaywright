## Step-by-Step Setup for QA Automation Framework

### ✅ Step 1: Initialize the Project
```bash
npm init -y
npm i -D playwright typescript ts-node @playwright/test
npx playwright install
```

### ✅ Step 2: Add `copilot-instructions.md` to Root
Create this file first to guide GitHub Copilot Agent with your architectural intent and coding conventions. Use the version I shared earlier or tailor it further.

### ✅ Step 3: Scaffold Starter Template
Ask Copilot:
```ts
// Generate a starter Playwright test in TypeScript for visiting the products page and validating product titles.
```

Then run:
```bash
npx playwright test
```

### ✅ Step 4: Organize Folder Structure (Feature + Page Object Model)
Create folders:
```
/tests/products/         → Feature-based test cases
/pages/productsPage.ts   → Page Object for product listing
/utils/                  → Common helpers (e.g., waitForElement, testDataLoader)
/config/                 → Playwright config and environment setup
```

Ask Copilot:
```ts
// Create a Page Object class for the Products page with methods to get product names and prices.
```

### ✅ Step 5: Implement Page Object for Products Page
Use semantic selectors like `text=View Product`, `data-testid`, or role-based queries.

Example prompt:
```ts
// In ProductsPage.ts, create methods:
// - getAllProductTitles()
// - getProductPriceByName(productName: string)
// - clickViewProduct(productName: string)
```

### ✅ Step 6: Write Feature-Based Tests
In `/tests/products/productListing.spec.ts`:
```ts
// Write a test that navigates to the products page and validates that at least 10 products are listed.
```

```ts
// Write a test that verifies the price of 'Blue Top' is Rs. 500.
```

### ✅ Step 7: Add Utilities
Ask Copilot:
```ts
// Create a helper to wait for a selector with retries and timeout.
```

```ts
// Create a test data loader that reads product names from a JSON file.
```

### ✅ Step 8: Run and Refine
Use:
```bash
npx playwright test --headed
```
Refactor based on test outcomes and modularize further.