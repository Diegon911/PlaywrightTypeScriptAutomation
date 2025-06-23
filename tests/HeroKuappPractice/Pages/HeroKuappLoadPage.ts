import { expect, type Locator, type Page } from '@playwright/test';
 
export class HeroKuappLoadPage {
    readonly page: Page;
    readonly titleLabel: Locator;
    readonly startButton: Locator;
    readonly msgLabel: Locator;

 
    constructor(page: Page) {
        this.page = page;
        this.titleLabel = page.getByRole('heading', { name: 'Dynamically Loaded Page Elements' })
        this.startButton = page.getByRole('button', { name: 'Start' })
        this.msgLabel = page.getByRole('heading', { name: 'Hello World!' })
    }

}