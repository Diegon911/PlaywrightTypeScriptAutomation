import { expect, type Locator, type Page } from '@playwright/test';
 
export class HeroKuappCheckboxPage {
    readonly page: Page;
    readonly titleLabel: Locator;
    readonly checkbox1: Locator;
    readonly checkbox2: Locator;
 
    constructor(page: Page) {
        this.page = page;
        this.titleLabel = page.getByRole('heading', { name: 'Checkboxes' })
        this.checkbox1 = page.getByRole('checkbox').first()
        this.checkbox2 = page.getByRole('checkbox').nth(1)
    }

}