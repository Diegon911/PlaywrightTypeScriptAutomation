import { expect, type Locator, type Page } from '@playwright/test';
 
export class HeroKuappAdPage {
    readonly page: Page;
    readonly titleLabel: Locator;
    readonly closeOption: Locator;


 
    constructor(page: Page) {
        this.page = page;
        this.titleLabel = page.getByRole('heading', { name: 'Entry Ad' })
        this.closeOption = page.getByText('Close', { exact: true })

    }

}