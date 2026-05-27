import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {

  readonly page: Page;
  readonly dashboardText: Locator;

  

  constructor(page: Page) {
    this.page = page;

    this.dashboardText = page.getByRole('heading', { name: 'Dashboard' });
   
  }
  async verifyDashboardVisible() {
    await expect(this.dashboardText).toBeVisible();
  }
 

     
}