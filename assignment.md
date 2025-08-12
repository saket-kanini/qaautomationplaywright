## Assignment: Functional Test Automation with Playwright + TypeScript

### Target Web Application
Explore and automate the following site:
**[https://automationexercise.com/products](https://automationexercise.com/products)**

This page lists a variety of products with prices, titles, and “Add to cart” and “View Product” actions. Your goal is to build a robust UI automation suite that validates core functionality, handles edge cases, and follows best practices.

---

### Assignment Objectives

- Understand the structure and behavior of the Products page.
- Develop an end-to-end UI test suite using Playwright and TypeScript.
- Focus on functional verification, negative test cases, and modular design.
- Ensure the test suite is **compilation-error free**, **runnable**, and **well-documented**.

---

### Tech Stack

| Category         | Tools / Frameworks                          |
|------------------|---------------------------------------------|
| Language         | TypeScript                                  |
| Automation Tool  | Playwright                                  |
| Test Runner      | Playwright Test                             |
| IDE              | VS Code (latest version)                    |
| Config Format    | JSON (for env and test data)                |

---

### Deliverables

| Category              | Item                                                                 |
|-----------------------|----------------------------------------------------------------------|
| Test Case Design    | Create a test plan with **at least 10 scenarios** (include 2 negative cases) |
| Page Object Model   | Implement reusable page objects for the Products page               |
| Test Implementation | Use proper locators, assertions, and logging                        |
| Config Management   | Add a config file (`env.json`) to store base URL and settings       |
| Code Quality        | Follow modular design and SOLID principles where applicable         |
| Wait Strategy       | Use explicit waits and retry logic for flaky elements               |
| Test Data Handling  | Simulate data using JSON or parameterized tests                     |
| README              | Include a README with setup instructions and test execution steps   |
| Optional            | Include a test results file (e.g., HTML report or console output)   |

---

### Evaluation Rubric

| Area                  | Criteria                                                                 |
|-----------------------|--------------------------------------------------------------------------|
| Test Design           | Coverage of key flows, edge cases, and negative scenarios                |
| Architecture          | Use of Page Object Model and modular folder structure                    |
| Code Quality          | Readability, maintainability, and adherence to TypeScript best practices |
| Execution             | Tests run successfully without build errors                              |
| Documentation         | Clear README and test plan                                               |

---

### Estimated Effort

**16–24 hours**  
This includes setup, test design, implementation, debugging, and documentation.

