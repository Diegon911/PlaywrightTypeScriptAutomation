import { expect, type Locator, type Page } from '@playwright/test';
 
export class HeroKuappGeolocationPage {
    readonly page: Page;
    readonly titleLabel: Locator;
    readonly locationButton: Locator;
    readonly latitudeLabel: Locator;
    readonly longitudeLabel: Locator;
 
    constructor(page: Page) {
        this.page = page;
        this.titleLabel = page.getByRole('heading', { name: 'Geolocation' })
        this.locationButton = page.getByRole('button', { name: 'Where am I?' })
        this.latitudeLabel = page.getByText('19.2968346')
        this.longitudeLabel = page.getByText('-')
    }

}