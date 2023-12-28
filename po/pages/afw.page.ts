import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class AfwPage extends BasePage {
  private readonly category: Locator;

  constructor(page: Page) {
    super(page);
    this.category = this.afwLocator;
  }

  public async navigateToCategory() {
    await this.navigateToHomePage();
    await this.category.click();
  }
}
