import { BaseComponent } from '../common/base.component';
import { Locator, Page } from '@playwright/test';

export class ButtonsComponent extends BaseComponent {
  private componentLocator: Locator;
  private doubleClickBtnLocator: Locator;
  private rightClickBtnLocator: Locator;
  private singleClickBtnLocator: Locator;
  private dcBtnMessage: Locator;
  private rcBtnMessage: Locator;
  private scBtnMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.componentLocator = page.locator('#item-4', { has: page.getByText('Buttons') });
    this.doubleClickBtnLocator = page.locator('[id="doubleClickBtn"]');
    this.rightClickBtnLocator = page.locator('[id="rightClickBtn"]');
    this.singleClickBtnLocator = page.locator('.btn-primary').last();
    this.dcBtnMessage = page.locator('[id="doubleClickMessage"]');
    this.rcBtnMessage = page.locator('[id="rightClickMessage"]');
    this.scBtnMessage = page.locator('[id="dynamicClickMessage"]');
  }

  public get locator(): Locator {
    return this.componentLocator;
  }

  public get doubleClickButton() {
    return this.doubleClickBtnLocator;
  }

  public get rightClickButton() {
    return this.rightClickBtnLocator;
  }

  public get singleClickButton() {
    return this.singleClickBtnLocator;
  }

  public get doubleClickMessage(): Locator {
    return this.dcBtnMessage;
  }

  public get rightClickMessage(): Locator {
    return this.rcBtnMessage;
  }

  public get singleClickMessage(): Locator {
    return this.scBtnMessage;
  }

  async navigateToComponent() {
    await this.componentLocator.click();
  }
}
