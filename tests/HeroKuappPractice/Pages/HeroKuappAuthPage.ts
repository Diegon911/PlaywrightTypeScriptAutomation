import { expect, type Locator, type Page } from '@playwright/test';
 
export class HeroKuappAuthPage {
    readonly page: Page;
    readonly titleLabel: Locator;
    readonly textboxUser: Locator;
    readonly textboxPassword: Locator;
    readonly loginButton: Locator;
    readonly logoutButton: Locator;
    readonly userErrorMsg: Locator;
    readonly passErrorMsg: Locator;
    readonly successMsg: Locator;
    readonly logoutMsg: Locator;
 
    constructor(page: Page) {
        this.page = page;
        this.titleLabel = page.getByRole('heading', { name: 'Login Page' })
        this.textboxUser = page.getByRole('textbox', { name: 'Username' })
        this.textboxPassword = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.logoutButton = page.getByRole('link', { name: 'Logout' })
        this.userErrorMsg = page.getByText('Your username is invalid!')
        this.passErrorMsg = page.getByText('Your password is invalid!')
        this.successMsg = page.getByText('You logged into a secure area')
        this.logoutMsg = page.getByText('You logged out of the secure')
    }

}