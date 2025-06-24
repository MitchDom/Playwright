import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.locator('.tabs__item').first()).toBeVisible();
  await page.getByRole('link', { name: 'Canary releases' }).click();
  await expect(page.getByText('noteUsing a canary release in')).toBeVisible();
});