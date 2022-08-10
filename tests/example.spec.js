// @ts-check
const { test, expect } = require('@playwright/test');

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
  const getStarted = page.locator('text=Get Started');
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');
  await getStarted.click();
  await expect(page).toHaveURL(/.*intro/);
});