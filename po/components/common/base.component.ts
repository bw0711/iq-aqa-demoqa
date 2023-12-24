import { Page } from '@playwright/test';

export class BaseComponent {
  constructor(protected page: Page) {}

  protected async navigateTo(url: string) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }
}
