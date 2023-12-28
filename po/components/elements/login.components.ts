import { Page, Locator } from '@playwright/test';

export class LoginComponent {
  constructor(private readonly page: Page) {}

  public get component(): Locator {
    return this.page.locator('#item-0', { has: this.page.getByText('Login') });
  }

  public get userNameField(): Locator {
    return this.page.locator('#userName');
  }

  public get passwordField(): Locator {
    return this.page.locator('#password');
  }

  public get loginButton(): Locator {
    return this.page.locator('#login');
  }

  public get newUserButton(): Locator {
    return this.page.locator('#newUser');
  }

  public async navigateToComponent() {
    return this.component.click();
  }
}
