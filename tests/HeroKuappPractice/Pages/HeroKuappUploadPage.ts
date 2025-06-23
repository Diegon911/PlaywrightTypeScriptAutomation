import { expect, type Locator, type Page } from '@playwright/test';
 
export class HeroKuappUploadPage {
    readonly page: Page;
    readonly titleLabel: Locator;
    readonly selectFileButton: Locator;
    readonly uploadButton: Locator;
    readonly uploadSuccessMsg: Locator;
 
    constructor(page: Page) {
        this.page = page;
        this.titleLabel = page.getByRole('heading', { name: 'File Uploader' })
        this.selectFileButton = page.getByRole('button', { name: 'Choose File' })
        this.uploadButton = page.getByRole('button', { name: 'Upload' })
        this.uploadSuccessMsg = page.getByRole('heading', { name: 'File Uploaded!' })
    }

}