import { expect, type Locator, type Page } from '@playwright/test';
 
export class HeroKuappInputsPage {
    readonly page: Page;
    readonly titleLabel: Locator;
    readonly inputTextbox: Locator;
 
    constructor(page: Page) {
        this.page = page;
        this.titleLabel = page.getByRole('heading', { name: 'Inputs' })
        this.inputTextbox = page.getByRole('spinbutton')
    }

}