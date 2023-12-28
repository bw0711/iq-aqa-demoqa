import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';
import { LoginComponent } from 'po/components/elements/login.components';

export class BookStorePage extends BasePage {
  private readonly category: Locator;
  public readonly loginPage: LoginComponent;

  constructor(page: Page) {
    super(page);
    this.category = this.bookStoreLocator;
    this.loginPage = new LoginComponent(page);
  }

  public async loggedUserNameValue(): Promise<string> {
    return await this.page.locator('#userName-value').textContent();
  }

  public async navigateToCategory() {
    await this.navigateToHomePage();
    await this.category.click();
  }

  public async navigateToLoginPage() {
    await this.navigateToCategory();
    await this.loginPage.navigateToComponent();
  }

  public async loginUser() {
    await this.loginPage.userNameField.fill(process.env.USERNAME);
    await this.loginPage.passwordField.fill(process.env.PASSWORD);
    await this.loginPage.loginButton.click();
  }
}
