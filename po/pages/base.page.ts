import { Page, Locator } from '@playwright/test';

export class BasePage {
  protected page: Page;

  private elementsLocator: Locator;
  private formsLocator: Locator;
  private afwLocator: Locator;
  private widgetsLocator: Locator;
  private interactionsLocator: Locator;
  private bookStoreLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.elementsLocator = page.locator('.card-body', { has: page.getByText('Elements') });
    this.formsLocator = page.locator('.card-body', { has: page.getByText('Forms') });
    this.afwLocator = page.locator('.card-body', { has: page.getByText('Alerts, Frame & Windows') });
    this.widgetsLocator = page.locator('.card-body', { has: page.getByText('Widgets') });
    this.interactionsLocator = page.locator('.card-body', { has: page.getByText('Interactions') });
    this.bookStoreLocator = page.locator('.card-body', { has: page.getByText('Book Store Application') });
  }

  public get elementsPage(): Locator {
    return this.elementsLocator;
  }

  public get formsPage(): Locator {
    return this.formsLocator;
  }

  public get afwPage(): Locator {
    return this.afwLocator;
  }

  public get widgetsPage(): Locator {
    return this.widgetsLocator;
  }

  public get interactionsPage(): Locator {
    return this.interactionsLocator;
  }

  public get bookStorePage(): Locator {
    return this.bookStoreLocator;
  }

  protected async navigateTo(url: string) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  async navigateToHomePage() {
    await this.navigateTo('/');
  }
}
