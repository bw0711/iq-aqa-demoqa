import { test, expect } from '@playwright/test';
import { BookStorePage } from 'po/pages';

test('Login existing user', async ({page}) => {
    const booksStorePage = new BookStorePage(page);

    await booksStorePage.navigateToLoginPage();
    await booksStorePage.loginUser();

    const loggedUserName = await booksStorePage.loggedUserNameValue();
    expect(loggedUserName).toBe(process.env.USERNAME);
})
