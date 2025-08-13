import { Page } from '@playwright/test';

export class ProductDetailsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Returns the product title on the details page
  getTitleLocator() {
    return this.page.locator('.product-information h2');
  }

  // Returns the product price locator on the details page
  getPriceLocator() {
    return this.page.locator('.product-information span');
  }

  // Returns the product description locator on the details page
  getDescriptionLocator() {
    return this.page.locator('.product-information p');
  }
}
