import { Page, Locator, expect } from '@playwright/test';


export class AdminPage {

readonly page: Page;
readonly adminMenu: Locator;
readonly userManagement: Locator;


constructor (page:Page){
    this.page = page;
    this.adminMenu=page.getByRole('link', { name: /^Admin$/i });
    this.userManagement = page.getByText(/Admin.*User Management?/);

       
}
async openAdminPage(){
    // await this.page.waitForLoadState('networkidle');
    await this.adminMenu.click();
    await this.page.waitForTimeout(2000);
    await expect(this.userManagement).toBeVisible();   
     
}

}