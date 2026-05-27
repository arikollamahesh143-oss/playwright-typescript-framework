import { Page, Locator, expect } from '@playwright/test';

export class PIMPage {

    readonly page:Page;
    readonly pimMenu: Locator;
    readonly pimText:Locator;
    readonly employeeName:Locator;
    readonly employeeId:Locator;
    readonly searchButton:Locator;

    constructor(page:Page){
        this.page = page;
        this.pimMenu = page.getByRole('link', { name: /^PIM$/i });
this.pimText = page.getByRole('heading', { name: 'PIM' });
        this.employeeName = page.getByRole('textbox', { name: 'Type for hints...' }).first();
        this.employeeId =  page.getByRole('textbox').nth(2);
        this.searchButton = page.getByRole('button', { name: 'Search' });
    }   

    async openPIMPage(){
        // await this.page.waitForLoadState('networkidle');
        await this.pimMenu.click();
        await this.page.waitForTimeout(2000);
        await expect(this.pimText).toBeVisible();
    }

    async searchEmployee(employeeName: string, employeeId: string){
        await this.employeeName.click();
        await this.employeeName.fill(employeeName);
        await this.employeeId.click();
        await this.employeeId.fill(employeeId); 
        await this.searchButton.click();
    }


}

