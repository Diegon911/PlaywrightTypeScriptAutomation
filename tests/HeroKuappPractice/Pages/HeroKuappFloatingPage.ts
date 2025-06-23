import { expect, type Locator, type Page } from '@playwright/test';
 
export class HeroKuappFloatingPage {
    readonly page: Page;
    readonly titleLabel: Locator;
    readonly homeMenu: Locator;
    readonly newsMenu: Locator;
    readonly contactMenu: Locator;
    readonly aboutMenu: Locator;
 
    constructor(page: Page) {
        this.page = page;
        this.titleLabel = page.getByRole('heading', { name: 'Floating Menu' })
        this.homeMenu = page.getByRole('link', { name: 'Home' })
        this.newsMenu = page.getByRole('link', { name: 'News' })
        this.contactMenu = page.getByRole('link', { name: 'Contact' })
        this.aboutMenu = page.getByRole('link', { name: 'About' })
    }

}