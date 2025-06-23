import { expect, type Locator, type Page } from '@playwright/test';
 
export class HeroKuappShadowPage {
    readonly page: Page;
    readonly titleLabel: Locator;
    readonly firstLabel: Locator;
    readonly secondLabel: Locator;
    readonly thirdLabel: Locator;

    constructor(page: Page) {
        this.page = page;
        this.titleLabel = page.getByRole('heading', { name: 'Simple template' })
        this.firstLabel = page.locator('span')
        this.secondLabel = page.getByRole('listitem').filter({ hasText: 'Let\'s have some different' })
        this.thirdLabel = page.getByText('In a list!')

    }

}