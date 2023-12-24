import { test, expect } from '@playwright/test';
import { BasePage } from 'po/pages/base.page';

test('Check initial state', async ({ page }) => {
  const basePage = new BasePage(page);

  await basePage.navigateToHomePage();

  await expect(basePage.elementsPage).toBeVisible();
  await expect(basePage.formsPage).toBeVisible();
  await expect(basePage.afwPage).toBeVisible();
  await expect(basePage.widgetsPage).toBeVisible();
  await expect(basePage.interactionsPage).toBeVisible();
  await expect(basePage.bookStorePage).toBeVisible();
});
