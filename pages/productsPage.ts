import { Page } from '@playwright/test';
import { getBaseUrl } from '../utils/envHelper';


export class ProductsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Returns all product card locators
  getAllProductCardLocators() {
    return this.page.locator('.productinfo.text-center');
  }

  // Returns all product card element handles (for legacy/test compatibility)
  async getAllProductCardHandles() {
    return this.page.$$('.productinfo.text-center');
  }

  // Returns all product wrapper locators
  getAllProductWrapperLocators() {
    return this.page.locator('.product-image-wrapper');
  }

  // Returns all product image element handles
  async getAllProductImageHandles() {
    return this.page.$$('.productinfo.text-center img');
  }

  // Returns all product image locators
  getAllProductImageLocators() {
    return this.page.locator('.productinfo.text-center img');
  }

  async goto() {
    const baseUrl = getBaseUrl();
    await this.page.goto(`${baseUrl}/products`);
  }

  // Returns all product titles on the page
  async getAllProductTitles(): Promise<string[]> {
    return this.page.$$eval('.productinfo.text-center p', elements =>
      elements.map(el => el.textContent?.trim() || '')
    );
  }

  // Returns the price for a given product name
  async getProductPriceByName(productName: string): Promise<string | null> {
    // Find the product card containing the product name
    const productCard = await this.page.locator('.productinfo.text-center').filter({ has: this.page.locator('p', { hasText: productName }) }).first();
    if (await productCard.count() === 0) return null;
    const price = await productCard.locator('.price').first().textContent();
    return price?.trim() || null;
  }

  // Clicks the 'View Product' button for a given product name
  async clickViewProduct(productName: string): Promise<void> {
    const productCard = await this.page.locator('.productinfo.text-center').filter({ has: this.page.locator('p', { hasText: productName }) }).first();
    if (await productCard.count() === 0) throw new Error(`Product with name '${productName}' not found.`);
    // The 'View Product' button is usually in the parent card, so go up to the card and click the button
    const cardParent = productCard.locator('xpath=ancestor::div[contains(@class, "product-image-wrapper")]');
    const viewProductBtn = cardParent.locator('a:has-text("View Product")');
    await viewProductBtn.first().click();
  }
  
}
