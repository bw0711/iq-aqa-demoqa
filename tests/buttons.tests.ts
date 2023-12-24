import { test, expect } from '@playwright/test';
import { ElementsPage } from 'po/pages/elements.page';

test.describe('Elements -> Buttons', () => {
  let elementsPage: ElementsPage;

  test.beforeEach(async ({ page }) => {
    elementsPage = new ElementsPage(page);
    await elementsPage.navigateToButtonsPage();
  });

  test('Double Click button', async () => {
    await elementsPage.buttons.doubleClickBtn.dblclick();
    await expect(elementsPage.buttons.dcBtnMessage).toBeVisible();
  });

  test('Right Click button', async () => {
    await elementsPage.buttons.rightClickBtn.click({ button: 'right' });
    await expect(elementsPage.buttons.rcBtnMessage).toBeVisible();
  });

  test('Click Me button', async () => {
    await elementsPage.buttons.singleClickBtn.click();
    await expect(elementsPage.buttons.scBtnMessage).toBeVisible();
  });
});
