import { test, expect } from '@playwright/test';
import { BasePage } from 'po/pages/base.page';

test('Check initial state', async ({ page }) => {
  const basePage = new BasePage(page);

  await basePage.navigateToHomePage();

  await expect(basePage.elementsLocator).toBeVisible();
  await expect(basePage.formsLocator).toBeVisible();
  await expect(basePage.afwLocator).toBeVisible();
  await expect(basePage.widgetsLocator).toBeVisible();
  await expect(basePage.interactionsLocator).toBeVisible();
  await expect(basePage.bookStoreLocator).toBeVisible();
});
