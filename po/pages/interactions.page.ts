import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class InteractionsPage extends BasePage {
  readonly category: Locator;

  constructor(page: Page) {
    super(page);
    this.category = this.interactionsLocator;
  }

  async navigateToCategory() {
    await this.navigateToHomePage();
    await this.category.click();
  }
}
