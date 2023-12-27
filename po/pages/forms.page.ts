import { BasePage } from './base.page';
import { Locator, Page } from '@playwright/test';

export class FormsPage extends BasePage {
  private readonly category: Locator;

  constructor(page: Page) {
    super(page);
    this.category = this.formsLocator;
  }

  public async navigateToCategory() {
    await this.navigateToHomePage();
    await this.category.click();
  }
}
