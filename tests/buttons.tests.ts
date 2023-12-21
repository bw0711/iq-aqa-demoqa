import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/buttons');
});

test('Double Click', async ({ page }) => {
    const btnLocator = page.locator('[id="doubleClickBtn"]');
    const btnText = page.locator('[id="doubleClickMessage"]');

    await btnLocator.dblclick();
    await expect(btnText).toBeVisible();
});


test('Right Click', async ({ page }) => {
    const btnLocator = page.locator('[id="rightClickBtn"]');
    const btnText = page.locator('[id="rightClickMessage"]');

    await btnLocator.click({ button: "right" });
    await expect(btnText).toBeVisible();
});

test('Click Me', async ({ page }) => {
    const btnLocator = page.locator('.btn-primary').last();
    const btnText = page.locator('[id="dynamicClickMessage"]');

    await btnLocator.click();
    await expect(btnText).toBeVisible();
});
