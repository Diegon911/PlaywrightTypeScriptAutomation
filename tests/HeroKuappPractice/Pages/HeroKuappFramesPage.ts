import { expect, type Locator, type Page } from '@playwright/test';
 
export class HeroKuappFramesPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

  get frameTop() {
    return this.page.frameLocator('frame[name="frame-top"]');
  }

  get frameLeft() {
    return this.frameTop.frameLocator('frame[name="frame-left"]');
  }

  get frameRight() {
    return this.frameTop.frameLocator('frame[name="frame-right"]');
  }

  get frameMiddle() {
    return this.frameTop.frameLocator('frame[name="frame-middle"]');
  }

  get frameBottom() {
    return this.page.frameLocator('frame[name="frame-bottom"]');
  }

}