import { Page, Locator } from '@playwright/test';

export class BooksComponent {
  constructor(private readonly page: Page) {}

  public get component(): Locator {
    return this.page.locator('#item-2', { has: this.page.getByText('Book Store') });
  }

  public get chosenBook(): Locator {
    return this.page.locator('.action-buttons', { has: this.page.getByText('Git Pocket Guide')});
  }

  public get backToStoreBtn(): Locator {
    return this.page.locator('#addNewRecordButton', { has: this.page.getByText('Back To Book Store') });
  }

  public get addABookBtn(): Locator {
    return this.page.locator('#addNewRecordButton', { has: this.page.getByText('Add To Your Collection') });
  }

  public async navigateToComponent() {
    return this.component.click();
  }
}
