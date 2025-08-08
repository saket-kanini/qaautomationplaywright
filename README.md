# QA Automation Using Playwright

This project provides end-to-end automated testing for the products page of [automationexercise.com](https://automationexercise.com) using Playwright and TypeScript.

## Features
- Page Object Model for maintainable test code
- Test data and environment configuration via JSON files
- Utilities for robust selector handling and test data loading
- Example tests for product listing and price validation

## Project Structure
```
├── pages/                # Page Object classes
│   └── productsPage.ts
├── tests/                # Test files
│   └── products/
│       └── productListing.spec.ts
├── utils/                # Utility helpers
│   ├── envHelper.ts
│   ├── testDataLoader.ts
│   └── waitForSelectorWithRetries.ts
├── env.json              # Environment configuration (base URL)
├── package.json          # Project dependencies and scripts
├── .gitignore            # Git ignore rules
└── README.md             # Project documentation
```

## Getting Started
1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Install Playwright browsers:**
   ```sh
   npx playwright install
   ```
3. **Run tests:**
   ```sh
   npx playwright test
   ```

## Customization
- Update `env.json` to change the base URL.
- Add product names to a JSON file and use the test data loader utility for data-driven tests.

## Utilities
- `waitForSelectorWithRetries`: Waits for a selector with retries and timeout.
- `testDataLoader`: Loads product names from a JSON file.
- `envHelper`: Reads environment variables from `env.json`.

## License
MIT
