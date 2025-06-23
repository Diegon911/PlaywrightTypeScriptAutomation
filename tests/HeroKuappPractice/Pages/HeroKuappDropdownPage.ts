import { expect, type Locator, type Page } from '@playwright/test';
 
export class HeroKuappDropdownPage {
    readonly page: Page;
    readonly titleLabel: Locator;
    readonly dropdownElement: Locator;

 
    constructor(page: Page) {
        this.page = page;
        this.titleLabel = page.getByRole('heading', { name: 'Dropdown List' })
        this.dropdownElement = page.locator('#dropdown')
    }

}