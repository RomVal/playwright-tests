// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByPlaceholder('What needs to be done?').fill('asdddasd');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('aaaaaaaaa');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByText('aaaaaaaaa').click();
  await page.getByRole('button', { name: 'Delete' }).click();
  expect(await page.locator('text=asdddasd').isVisible()).toBeTruthy();
  expect(await page.locator('text=aaaaaaaaa').isVisible()).toBeFalsy();
});