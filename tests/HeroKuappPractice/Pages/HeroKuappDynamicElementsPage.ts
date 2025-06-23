import { expect, type Locator, type Page } from '@playwright/test';
 
export class HeroKuappDynamicElementsPage {
    readonly page: Page;
    readonly titleLabel: Locator;
    readonly checkboxElement: Locator;
    readonly enableElement: Locator;
    readonly addElement: Locator;
    readonly removeElement: Locator;
    readonly goneLabel: Locator;
    readonly backLabel: Locator;
    readonly textboxElement: Locator;
    readonly enableLabel: Locator;
    readonly disableElement: Locator;
    readonly disableLabel: Locator;
 
    constructor(page: Page) {
        this.page = page;
        this.titleLabel = page.getByRole('heading', { name: 'Dynamic Controls' })
        this.checkboxElement = page.getByRole('checkbox')
        this.removeElement = page.getByRole('button', { name: 'Remove' })
        this.enableElement = page.getByRole('button', { name: 'Enable' })
        this.addElement = page.getByRole('button', { name: 'Add' })
        this.goneLabel = page.getByText('It\'s gone!')
        this.backLabel = page.getByText('It\'s back!')
        this.textboxElement = page.getByRole('textbox')
        this.enableLabel = page.getByText('It\'s enabled!')
        this.disableElement = page.getByRole('button', { name: 'Disable' })
        this.disableLabel = page.getByText('It\'s disabled!')
    }

}