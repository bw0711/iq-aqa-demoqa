import { test, expect } from '@playwright/test';
import { ElementsPage } from 'po/pages/elements.page';

test.describe('Elements -> Buttns', async () => {
  test('Double Click button', async ({ page }) => {
    const elementsPage = new ElementsPage(page);

    await elementsPage.navigateToButtonsPage();
    await elementsPage.buttons.doubleClickBtn.dblclick();

    await expect(elementsPage.buttons.dcBtnMessage).toBeVisible();
  });

  test('Right Click button', async ({ page }) => {
    const elementsPage = new ElementsPage(page);

    await elementsPage.navigateToButtonsPage();
    await elementsPage.buttons.rightClickBtn.click({ button: 'right' });

    await expect(elementsPage.buttons.rcBtnMessage).toBeVisible();
  });

  test('Click Me button', async ({ page }) => {
    const elementsPage = new ElementsPage(page);

    await elementsPage.navigateToButtonsPage();
    await elementsPage.buttons.singleClickBtn.click();

    await expect(elementsPage.buttons.scBtnMessage).toBeVisible();
  });
});
