import { test } from 'fixtures/default';
import { expect } from '@playwright/test';


test('login existing user and add a book to the collection', async ({ loginUser, bookStorePage }) => {

    await loginUser();
  
    const loggedUserName = await bookStorePage.loggedUserNameValue();
    expect(loggedUserName).toBe(process.env.USERNAME);

    await bookStorePage.navigateToCategory();
    await bookStorePage.addToCollection();

    await bookStorePage.profilePage.navigateToComponent();
    await expect(bookStorePage.profilePage.addedBookLocator).toBeVisible();
    
});