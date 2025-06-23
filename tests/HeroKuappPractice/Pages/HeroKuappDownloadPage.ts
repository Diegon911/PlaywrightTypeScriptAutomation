import { expect, type Locator, type Page } from '@playwright/test';
 
export class HeroKuappDownloadPage {
    readonly page: Page;
    readonly titleLabel: Locator;
    readonly downloadElement: Locator;

 
    constructor(page: Page) {
        this.page = page;
        this.titleLabel = page.getByRole('heading', { name: 'File Downloader' })
        this.downloadElement = page.locator("//a[normalize-space()='sample_file.txt']")
    }

}