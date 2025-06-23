import { expect, type Locator, type Page } from '@playwright/test';
 
export class HeroKuappSliderPage {
    readonly page: Page;
    readonly titleLabel: Locator;
    readonly sliderBar: Locator;
    readonly sliderValue: Locator;

 
    constructor(page: Page) {
        this.page = page;
        this.titleLabel = page.getByRole('heading', { name: 'Horizontal Slider' })
        this.sliderBar = page.getByRole('slider')
        this.sliderValue = page.locator("//span[@id='range']")
    }

}