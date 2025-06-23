import { expect, type Locator, type Page } from '@playwright/test';
 
export class HeroKuappNotificationPage {
    readonly page: Page;
    readonly titleLabel: Locator;
    readonly showNotification: Locator;
    readonly notificationLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.titleLabel = page.getByRole('heading', { name: 'Notification Message' })
        this.showNotification = page.getByRole('link', { name: 'Click here' })
        this.notificationLabel = page.locator("//div[@id='flash']")
    }

}