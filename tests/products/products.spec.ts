import { test, expect } from '@playwright/test';

// Starter test: Visit the products page and validate product titles

test('Visit products page and validate product titles', async ({ page }) => {
  // Navigate to the products page
  await page.goto('https://automationexercise.com/products');

  // Wait for product titles to be visible
  await page.waitForSelector('.productinfo.text-center p');

  // Get all product title elements
  const productTitles = await page.$$eval('.productinfo.text-center p', elements =>
    elements.map(el => el.textContent?.trim() || '')
  );

  // Validate that at least one product title is present
  expect(productTitles.length).toBeGreaterThan(0);

  // Optionally, print product titles to the console
  console.log('Product Titles:', productTitles);

  // Example: Validate a specific product title exists (customize as needed)
  // expect(productTitles).toContain('Blue Top');
});
