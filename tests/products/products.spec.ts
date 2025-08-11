import { test, expect } from '@playwright/test';
import { ProductsPage } from '../../pages/productsPage';

test.describe('Products Page', () => {
  let productsPage: ProductsPage;

  test.beforeEach(async ({ page }) => {
    productsPage = new ProductsPage(page);
    await productsPage.goto();
  });

  test('should display at least one product title', async () => {
    // Arrange done in beforeEach
    // Act
    const productTitles = await productsPage.getAllProductTitles();
    // Assert
    expect(productTitles.length).toBeGreaterThan(0);
  });

  test('should contain "Blue Top" in product titles', async () => {
    const productTitles = await productsPage.getAllProductTitles();
    expect(productTitles).toContain('Blue Top');
  });
});
