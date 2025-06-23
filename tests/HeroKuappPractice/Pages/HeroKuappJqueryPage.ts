import { expect, type Locator, type Page } from '@playwright/test';
 
export class HeroKauppJqueryPage {
    readonly page: Page;
    readonly titleLabel: Locator;
    readonly enabledOption: Locator;
    readonly downloadOption: Locator;
    readonly csvOption: Locator;

 
    constructor(page: Page) {
        this.page = page;
        this.titleLabel = page.getByRole('heading', { name: 'JQueryUI - Menu' })
        this.enabledOption = page.getByRole('link', { name: 'Enabled' })
        this.downloadOption = page.getByRole('link', { name: 'Downloads' })
        this.csvOption = page.getByRole('link', { name: 'CSV' })
    }

}