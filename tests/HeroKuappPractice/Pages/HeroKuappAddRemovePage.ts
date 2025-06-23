import { expect, type Locator, type Page } from '@playwright/test';
 
export class HeroKuappAddRemovePage {
    readonly page: Page;
    readonly titleLabel: Locator;
    readonly addButton: Locator;
    readonly deleteButton: Locator;
 
    constructor(page: Page) {
        this.page = page;
        this.titleLabel = page.getByRole('heading', { name: 'Add/Remove Elements' })
        this.addButton = page.getByRole('button', { name: 'Add Element' })
        this.deleteButton = page.getByRole('button', { name: 'Delete' })
    }

}