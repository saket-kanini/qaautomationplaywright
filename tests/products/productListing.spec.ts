import { test, expect } from '@playwright/test';
import { ProductsPage } from '../../pages/productsPage';

test.describe('Products Page', () => {
  let productsPage: ProductsPage;

  test.beforeEach(async ({ page }) => {
    productsPage = new ProductsPage(page);
    await productsPage.goto();
  });

  test('should verify the price of "Blue Top" is Rs. 500', async () => {
    // Arrange done in beforeEach
    // Act
    const price = await productsPage.getProductPriceByName('Blue Top');
    // Assert
    expect(price).toBe('Rs. 500');
  });

  test('should display at least 10 products on the products page', async () => {
    const productTitles = await productsPage.getAllProductTitles();
    expect(productTitles.length).toBeGreaterThanOrEqual(10);
  });
});
