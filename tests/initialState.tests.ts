import { test, expect } from '@playwright/test';

test('Check initial state', async ({ page }) => {
  await page.goto('/');

  const expectedTexts = ['Elements', 'Forms', 'Alerts, Frame & Windows', 'Widgets', 'Interactions', 'Book Store Application'];

  for (const text of expectedTexts) {
    await expect(page.locator(`text=${text}`)).toBeVisible();
  }
});
