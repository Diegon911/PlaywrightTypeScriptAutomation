import { expect, type Locator, type Page } from '@playwright/test';
 
export class HeroKuappTextPage {
    readonly page: Page;
    readonly titleLabel: Locator;
    readonly textLabel: Locator;
 
    constructor(page: Page) {
        this.page = page;
        this.titleLabel = page.getByText(/Test Variation|Test Control/);
        this.textLabel = page.getByText('Also known as split testing.');
    }

}