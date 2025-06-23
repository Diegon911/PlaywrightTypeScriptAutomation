import { expect, type Locator, type Page } from '@playwright/test';
 
export class HeroKuappAlertsPage {
    readonly page: Page;
    readonly titleLabel: Locator;
    readonly alert1: Locator;
    readonly alert2: Locator;
    readonly alert3: Locator;
    readonly alertResult: Locator;
 
    constructor(page: Page) {
        this.page = page;
        this.titleLabel = page.getByRole('heading', { name: 'JavaScript Alerts' })
        this.alert1 = page.getByRole('button', { name: 'Click for JS Alert' })
        this.alert2 = page.getByRole('button', { name: 'Click for JS Confirm' })
        this.alert3 = page.getByRole('button', { name: 'Click for JS Prompt' })
        this.alertResult = page.locator("//p[@id='result']");
    }

}