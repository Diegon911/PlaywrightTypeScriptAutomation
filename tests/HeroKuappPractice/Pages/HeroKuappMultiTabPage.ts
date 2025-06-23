import { expect, type Locator, type Page } from '@playwright/test';
 
export class HeroKuappMultiTabPage {
    readonly page: Page;
    readonly titleLabel: Locator;
    readonly openNewTab: Locator;
    readonly newTabMsg: Locator;

    constructor(page: Page) {
        this.page = page;
        this.titleLabel = page.getByRole('heading', { name: 'Opening a new window' })
        this.openNewTab = page.getByRole('link', { name: 'Click Here' })
        this.newTabMsg = page.getByRole('heading', { name: 'New Window' })
    }

}