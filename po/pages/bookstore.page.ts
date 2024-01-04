import { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page';
import { LoginComponent } from 'po/components/elements/login.components';
import { BooksComponent } from 'po/components/elements/books.component';
import { ProfileComponent } from 'po/components/elements/profile.component';

export class BookStorePage extends BasePage {
  private readonly category: Locator;
  public readonly loginPage: LoginComponent;
  public readonly bookStorePage: BooksComponent;
  public readonly profilePage: ProfileComponent;

  constructor(page: Page) {
    super(page);
    this.category = this.bookStoreLocator;
    this.loginPage = new LoginComponent(page);
    this.bookStorePage = new BooksComponent(page);
    this.profilePage = new ProfileComponent(page);
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

  public async navigateToProfilePage() {
    await this.navigateToCategory();
    await this.profilePage.navigateToComponent();
  }

  public async loginUser() {
    await this.loginPage.userNameField.fill(process.env.USERNAME);
    await this.loginPage.passwordField.fill(process.env.PASSWORD);
    await this.loginPage.loginButton.click();
  }

  public async addToCollection() {
    await this.bookStorePage.chosenBook.click();
    await this.bookStorePage.addABookBtn.click();
    this.page.on('dialog', dialog => dialog.accept());
  }
}
