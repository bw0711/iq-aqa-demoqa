import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class FormsPage extends BasePage {
  readonly category: Locator;

  constructor(page: Page) {
    super(page);
    this.category = this.formsLocator;
  }

  async navigateToCategory() {
    await this.navigateToHomePage();
    await this.category.click();
  }
}
