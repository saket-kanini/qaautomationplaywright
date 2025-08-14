
// Playwright tests for the Product Details feature on the products page
import { test, expect } from '@playwright/test';
import { ProductsPage } from '../../pages/productsPage';
import { ProductDetailsPage } from '../../pages/productDetailsPage';

// Test group: Product Details feature
test.describe('Feature: Product Details', () => {
  let productsPage: ProductsPage;

  // Set up a new ProductsPage before each test
  test.beforeEach(async ({ page }) => {
    productsPage = new ProductsPage(page);
    await productsPage.goto();
  });

  // Clicking 'View Product' navigates to the correct product details page
  test('Clicking "View Product" navigates to the correct product details page', async () => {
    // Click the View Product button for the first product
    const firstProductTitle = (await productsPage.getAllProductTitles())[0];
    await productsPage.clickViewProduct(firstProductTitle);
    // Use ProductDetailsPage for assertions
    const productDetailsPage = new ProductDetailsPage(productsPage.page);
    await expect(productDetailsPage.page).toHaveURL(/\/product_details\//);
    await expect(productDetailsPage.getTitleLocator()).toHaveText(firstProductTitle, { timeout: 10000 });
  });

  // Search for a product by name and verify relevant results are shown
  test('Search for a product by name and verify relevant results are shown', async () => {
    const productTitles = await productsPage.getAllProductTitles();
    const searchName = productTitles[0];
    await productsPage.page.fill('#search_product', searchName);
    await productsPage.page.click('#submit_search');
    // Assert: At least one result and the searched product is present
    const results = await productsPage.getAllProductTitles();
    expect(results.length).toBeGreaterThan(0);
    expect(results).toContain(searchName);
  });
  
});
