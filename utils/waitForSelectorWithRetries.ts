import { Page } from '@playwright/test';

/**
 * Waits for a selector to appear on the page, retrying until timeout.
 * @param page Playwright Page object
 * @param selector Selector string
 * @param options Optional: { timeout: ms, interval: ms }
 * @returns The element handle if found, otherwise throws an error
 */
export async function waitForSelectorWithRetries(
  page: Page,
  selector: string,
  options?: { timeout?: number; interval?: number }
) {
  const timeout = options?.timeout ?? 5000; // default 5s
  const interval = options?.interval ?? 250; // default 250ms
  const start = Date.now();
  let lastError: Error | undefined;

  while (Date.now() - start < timeout) {
    try {
      const handle = await page.$(selector);
      if (handle) return handle;
    } catch (err) {
      lastError = err as Error;
    }
    await new Promise(res => setTimeout(res, interval));
  }
  throw new Error(
    `Timeout after ${timeout}ms waiting for selector: ${selector}` +
      (lastError ? `\nLast error: ${lastError.message}` : '')
  );
}
