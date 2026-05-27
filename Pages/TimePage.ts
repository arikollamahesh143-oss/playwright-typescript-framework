import { Page, Locator, expect } from '@playwright/test';

export class TimePage {

    readonly page:Page;
      readonly timeMenu: Locator;
    readonly timeText:Locator;
    readonly time:Locator;
    employeetimesheet:Locator;

    constructor(page:Page){
        this.page = page;
        this.timeMenu = page.getByRole('link', { name: /^Time$/i });
        this.timeText = page.getByText(/Time.*Timesheets?/);
        const time = page.locator('span.oxd-topbar-body-nav-tab-item:has-text("Timesheets")');
        this.time = time;
        this.employeetimesheet = page.locator('ul.oxd-dropdown-menu a:has-text("Employee Timesheets")');
    }

    async openTimePage(){
        // await this.page.waitForLoadState('networkidle');
        // await this.timeMenu.waitFor({ state: 'visible', timeout: 10000 });
        await this.timeMenu.click();
        await expect(this.timeText).toBeVisible();
    }

    async navigateToTimesheets(){

        await this.page.waitForTimeout(2000);
        await this.time.hover();
                await this.page.waitForTimeout(2000);

        await this .time.click();
                await this.page.waitForTimeout(2000);

        await this.employeetimesheet.click();
    }
}