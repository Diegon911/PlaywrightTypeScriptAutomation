import { expect, type Locator, type Page } from '@playwright/test';
 
export class HeroKuappDragDropPage {
    readonly page: Page;
    readonly titleLabel: Locator;
    readonly elementoA: Locator;
    readonly elementoB: Locator;
 
    constructor(page: Page) {
        this.page = page;
        this.titleLabel = page.getByRole('heading', { name: 'Drag and Drop' })
        this.elementoA = page.locator('#column-a')
        this.elementoB = page.locator('#column-b')
    }

}