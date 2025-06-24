import { test, expect } from '@playwright/test';

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

  // Expects page to have text "you will learn".
  await expect(page.locator('strong')).toHaveText('You will learn');

  // Expects go to the page https://playwright.dev/docs/canary-releases
  // await page.goto('https://playwright.dev/docs/canary-releases');
  //await page.locator('a').filter({ hasText: 'Canary releases' }).click();
  await page.getByText('Canary releases').click();
  //Expect element i note is visible
    await expect(page.locator('.theme-admonition')).toBeVisible();


});


