import { test, expect } from '@playwright/test';
import { ElementsPage } from 'po/pages/elements.page';

test.describe('Elements -> Buttns', async () => {
  test('Double Click button', async ({ page }) => {
    const elementsPage = new ElementsPage(page);

    await elementsPage.navigateToButtonsPage();
    await elementsPage.buttons.doubleClickButton.dblclick();

    await expect(elementsPage.buttons.doubleClickMessage).toBeVisible();
  });

  test('Right Click button', async ({ page }) => {
    const elementsPage = new ElementsPage(page);

    await elementsPage.navigateToButtonsPage();
    await elementsPage.buttons.rightClickButton.click({ button: 'right' });

    await expect(elementsPage.buttons.rightClickMessage).toBeVisible();
  });

  test('Click Me button', async ({ page }) => {
    const elementsPage = new ElementsPage(page);

    await elementsPage.navigateToButtonsPage();
    await elementsPage.buttons.singleClickButton.click();

    await expect(elementsPage.buttons.singleClickMessage).toBeVisible();
  });
});
