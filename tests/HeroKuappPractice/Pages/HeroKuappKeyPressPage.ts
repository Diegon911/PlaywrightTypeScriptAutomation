import { expect, type Locator, type Page } from '@playwright/test';
 
export class HeroKuappKeyPressPage {
    readonly page: Page;
    readonly titleLabel: Locator;
    readonly keyTextBox: Locator;
    readonly keyDetectedLabel: Locator;
 
    constructor(page: Page) {
        this.page = page;
        this.titleLabel = page.getByRole('heading', { name: 'Key Presses' })
        this.keyTextBox = page.locator('#target')
        this.keyDetectedLabel = page.locator("//p[@id='result']")
    }

}