import { Page, Locator } from '@playwright/test';

export class ProfileComponent {
  constructor(private readonly page: Page) {}

  public get component(): Locator {
    return this.page.locator('#item-3', { has: this.page.getByText('Profile') });
  }

  public get addedBookLocator(): Locator {
    return this.page.locator('.rt-td', { has: this.page.getByText('Richard E. Silverman') });
  }

  public async navigateToComponent() {
    return this.component.click();
  }
}
