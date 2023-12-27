import { Page, Locator } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public get elementsLocator(): Locator {
    return this.page.locator('.card-body', { has: this.page.getByText('Elements') });
  }

  public get formsLocator(): Locator {
    return this.page.locator('.card-body', { has: this.page.getByText('Forms') });
  }

  public get afwLocator(): Locator {
    return this.page.locator('.card-body', { has: this.page.getByText('Alerts, Frame & Windows') });
  }

  public get widgetsLocator(): Locator {
    return this.page.locator('.card-body', { has: this.page.getByText('Widgets') });
  }

  public get interactionsLocator(): Locator {
    return this.page.locator('.card-body', { has: this.page.getByText('Interactions') });
  }

  public get bookStoreLocator(): Locator {
    return this.page.locator('.card-body', { has: this.page.getByText('Book Store Application') });
  }

  protected async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async navigateToHomePage() {
    await this.navigateTo('/');
  }
}
