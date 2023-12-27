import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';
import { LoginComponent } from 'po/components/elements/login.components';

export class BookStorePage extends BasePage {
  readonly category: Locator;
  readonly loginPage: LoginComponent;

  constructor(page: Page) {
    super(page);
    this.category = this.bookStoreLocator;
    this.loginPage = new LoginComponent(page);
  }

  // public get loggedUserNameValue(): Promise<string> {
  //   return this.page.locator('#userName-value').textContent() || ''; 
  // }

  async loggedUserNameValue(): Promise<string> {
    const textContent = await this.page.locator('#userName-value').textContent();
    return textContent || '';
  }

  async navigateToCategory() {
    await this.navigateToHomePage();
    await this.category.click();
  }

  async navigateToLoginPage() {
    await this.navigateToCategory();
    await this.loginPage.navigateToComponent();
  }

  async loginUser() {
    await this.loginPage.userNameField.fill(process.env.USERNAME || '');
    await this.loginPage.passwordField.fill(process.env.PASSWORD || '');
    await this.loginPage.loginButton.click();
  }
}
