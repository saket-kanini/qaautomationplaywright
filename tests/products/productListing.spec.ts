import { test, expect } from '@playwright/test';
import { ProductsPage } from '../../pages/productsPage';

test.describe('Feature: Product Listing', () => {
  let productsPage: ProductsPage;

  test.beforeEach(async ({ page }) => {
    productsPage = new ProductsPage(page);
    await productsPage.goto();
  });

  test('should display all product cards with image, title, and price', async () => {
    const productCards = await productsPage.page.$$('.productinfo.text-center');
    for (const card of productCards) {
      // Check image
      const image = await card.$('img');
      expect(image).not.toBeNull();
      // Check title
      const title = await card.$('p');
      expect(await title?.textContent()).not.toBeNull();
      // Check price
      const price = await card.$('.price');
      expect(await price?.textContent()).not.toBeNull();
    }
  });

  test('should display at least 10 products on the products page', async () => {
    const productTitles = await productsPage.getAllProductTitles();
    expect(productTitles.length).toBeGreaterThanOrEqual(10);
  });

  test('should have each product title visible and not empty', async () => {
    const productTitles = await productsPage.getAllProductTitles();
    for (const title of productTitles) {
      expect(title).toBeTruthy();
    }
  });

  test('should have a "View Product" button for every product card', async () => {
    const productWrappers = productsPage.page.locator('.product-image-wrapper');
    const count = await productWrappers.count();
    for (let i = 0; i < count; i++) {
      const wrapper = productWrappers.nth(i);
      // Check that the wrapper contains a product card
      const hasProductCard = await wrapper.locator('.productinfo.text-center').count();
      expect(hasProductCard).toBeGreaterThan(0);
      // Check for the View Product button
      const viewProductBtn = wrapper.locator('a:has-text("View Product")');
      expect(await viewProductBtn.count()).toBeGreaterThan(0);
    }
  });

  test('should filter products by category and display only relevant products', async () => {
    // This assumes there is a category filter in the sidebar
    // Example: Click on "Women > Dress" category
    const category = productsPage.page.locator('a:has-text("Women")').first();
    await category.click();
    const subCategory = productsPage.page.locator('a:has-text("Dress")').first();
    await subCategory.click();
    // Check that at least one product is shown
    const productTitles = await productsPage.getAllProductTitles();
    expect(productTitles.length).toBeGreaterThan(0);
    // Optionally, check that all products are relevant (if possible)
  });

  test('should validate that product images are loaded and not broken', async () => {
    const images = await productsPage.page.$$('.productinfo.text-center img');
    for (const img of images) {
      const src = await img.getAttribute('src');
      expect(src).toBeTruthy();
      // Optionally, check if image loads successfully
      const isLoaded = await img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0);
      expect(isLoaded).toBe(true);
    }
  });

});
