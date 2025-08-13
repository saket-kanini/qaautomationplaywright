
# Test Strategy

This test plan focuses on validating the Products feature of automationexercise.com using end-to-end automated tests with Playwright. The strategy includes:
- Covering core product listing and product details functionalities with both positive and negative scenarios.
- Grouping tests by feature for clarity and maintainability.
- Using the Page Object Model for modular, reusable test code.
- Ensuring tests are data-driven and environment-agnostic where possible.
- Prioritizing user-facing functionality and error handling.

# Test Plan: Products Feature Scenarios (automationexercise.com)

## Feature: Product Listing
### Positive Scenarios
1. Verify all product cards are displayed with image, title, and price.
2. Validate that at least 10 products are listed on the products page.
3. Check that each product title is visible and not empty.
4. Ensure each product displays a price in the correct format (e.g., 'Rs. 500').
5. Verify the 'View Product' button is present for every product card.
6. Filter products by category and confirm only relevant products are displayed.
7. Validate that product images are loaded and not broken.

### Negative Scenarios
1. Search for a non-existent product and verify that a 'No products found' message is displayed.

## Feature: Product Details
### Positive Scenarios
1. Clicking 'View Product' navigates to the correct product details page.
2. Check that product details (title, price, description) on the details page match those on the listing.
3. Search for a product by name and verify relevant results are shown.

### Negative Scenarios
1. Attempt to access a product details page with an invalid product ID and verify an error or 'Product not found' message is shown.
