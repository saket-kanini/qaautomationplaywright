import { test, expect } from '@playwright/test';
import { ProductsPage } from '../../pages/productsPage';


test('should verify the price of "Blue Top" is Rs. 500', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  await productsPage.goto();

  const price = await productsPage.getProductPriceByName('Blue Top');
  expect(price).toBe('Rs. 500');
});

test('should display at least 10 products on the products page', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  await productsPage.goto();

  const productTitles = await productsPage.getAllProductTitles();
  expect(productTitles.length).toBeGreaterThanOrEqual(10);
});
