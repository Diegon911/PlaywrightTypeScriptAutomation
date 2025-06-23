import { expect, type Locator, type Page } from '@playwright/test';
 
export class HeroKuappTablesPage {
    readonly page: Page;
    readonly titleLabel: Locator;
    readonly lastNameTable1: Locator;
    readonly firstNameTable1: Locator;
    readonly lastNameTable2: Locator;
    readonly firstNameTable2: Locator;
    readonly lastNameFieldT1: Locator;
    readonly firstNameFieldT1: Locator;
    readonly lastNameFieldT2: Locator;
    readonly firstNameFieldT2: Locator;



    constructor(page: Page) {
        this.page = page;
        this.titleLabel = page.getByRole('heading', { name: 'Data Tables' })
        this.lastNameTable1 = page.locator('#table1').getByText('Last Name')
        this.firstNameTable1 = page.locator('#table1').getByText('First Name')
        this.firstNameTable2 = page.locator('#table2').getByText('Last Name')
        this.lastNameTable2 = page.locator('#table2').getByText('First Name')
        this.lastNameFieldT1 = page.locator('#table1').getByRole('cell', { name: 'Smith', exact: true })
        this.firstNameFieldT1 = page.locator('#table1').getByRole('cell', { name: 'John' })
        this.lastNameFieldT2 = page.locator("//td[@class='last-name'][normalize-space()='Smith']")
        this.firstNameFieldT2 = page.locator("//td[@class='first-name'][normalize-space()='John']")
    }

}