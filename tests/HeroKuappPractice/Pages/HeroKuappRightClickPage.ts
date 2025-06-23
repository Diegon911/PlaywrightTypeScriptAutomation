import { expect, type Locator, type Page } from '@playwright/test';
 
export class HeroKuappRightClickPage {
    readonly page: Page;
    readonly titleLabel: Locator;
    readonly clickArea: Locator;

 
    constructor(page: Page) {
        this.page = page;
        this.titleLabel = page.getByRole('heading', { name: 'Context Menu' })
        this.clickArea = page.locator('#hot-spot')

    }

}