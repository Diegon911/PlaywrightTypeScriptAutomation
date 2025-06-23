import { expect, type Locator, type Page } from '@playwright/test';
 
export class HeroKuappHoverPage {
    readonly page: Page;
    readonly titleLabel: Locator;
    readonly nameUser1Label: Locator
    readonly nameUser2Label: Locator
    readonly nameUser3Label: Locator
    readonly imageUser1: Locator
    readonly imageUser2: Locator
    readonly imageUser3: Locator
 
    constructor(page: Page) {
        this.page = page;
        this.titleLabel = page.getByRole('heading', { name: 'Hovers' })
        this.nameUser1Label = page.getByRole('heading', { name: 'name: user1' })
        this.nameUser2Label = page.getByRole('heading', { name: 'name: user2' })
        this.nameUser3Label = page.getByRole('heading', { name: 'name: user3' })
        this.imageUser1 = page.getByRole('img', { name: 'User Avatar' }).first()
        this.imageUser2 = page.getByRole('img', { name: 'User Avatar' }).nth(1)
        this.imageUser3 = page.getByRole('img', { name: 'User Avatar' }).nth(2)
    }

}