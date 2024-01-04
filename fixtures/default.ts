import { test as base, Page } from '@playwright/test';
import { BookStorePage } from 'po/pages';

type Fixtures = {
  page: Page;
  bookStorePage: BookStorePage;
  loginUser(): Promise<void>;
};

export const test = base.extend<Fixtures>({
  bookStorePage: async ({ page }, use) => {
    const bookStorePage = new BookStorePage(page);
    await bookStorePage.navigateToLoginPage();
    await use(bookStorePage);
  },

  loginUser: async ({ bookStorePage }, use) => {
    await bookStorePage.loginUser();
    await use(async () => {});
  },
});
