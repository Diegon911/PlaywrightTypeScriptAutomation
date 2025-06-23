import { expect, type Locator, type Page } from '@playwright/test';
 
export class HeroKuappForgotPage {
    readonly page: Page;
    readonly titleLabel: Locator;
    readonly textboxPassword: Locator;
    readonly retrieveButton: Locator;
    readonly errorLabel: Locator;
 
    constructor(page: Page) {
        this.page = page;
        this.titleLabel = page.getByRole('heading', { name: 'Forgot Password' })
        this.textboxPassword = page.getByRole('textbox', { name: 'E-mail' })
        this.retrieveButton = page.getByRole('button', { name: 'Retrieve password' })
        this.errorLabel = page.getByRole('heading', { name: 'Internal Server Error' })
    }

}