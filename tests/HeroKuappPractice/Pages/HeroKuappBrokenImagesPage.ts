import { expect, type Locator, type Page } from '@playwright/test';
 
export class HeroKuappBrokenImagesPage {
    readonly page: Page;
    readonly titleLabel: Locator;
    readonly img1: Locator;
    readonly img2: Locator;
    readonly img3: Locator;
    readonly img1Result: Locator;
    readonly img2Result: Locator;
    readonly img3Result: Locator;
 
    constructor(page: Page) {
        this.page = page;
        this.titleLabel = page.getByRole('heading', { name: 'Broken Images' })
        this.img1 = page.getByRole('img').nth(1)
        this.img2 = page.getByRole('img').nth(2)
        this.img3 = page.getByRole('img').nth(3)
        this.img1Result = page.getByRole('heading', { name: 'Not Found' })
        this.img2Result = page.getByRole('heading', { name: 'Not Found' })
        this.img3Result = page.getByRole('img')
    }

}