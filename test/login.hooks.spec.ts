import { LoginPage } from '../Pages/LoginPage';
import { testData } from '../utils/testData';
import { employeeData } from '../utils/testData';
import { DashboardPage } from '../Pages/DashboardPage';
import { test } from '@playwright/test';
import { TimePage } from '../Pages/TimePage';
import { AdminPage } from '../Pages/AdminPage';
import { PIMPage } from '../Pages/PIMPage';
import { beforeEach } from 'node:test';

test.beforeEach('login to application', async ({ page }) => {
    const Login = new LoginPage(page);
    await Login.navigatetoLoginPage();
    await Login.login(testData.username, testData.password);
    await Login.verifyLoginSuccess();

    // //dashboardpage
    // const dashboard = new DashboardPage(page);
    // await dashboard.verifyDashboardVisible();

    // //timepage
    // const time = new TimePage(page);
    // await time.openTimePage();
    // await time.navigateToTimesheets();

    // //adminpage

    // const admin = new AdminPage(page);
    // await admin.openAdminPage();

    // // pim page
    // const pim = new PIMPage(page);
    // await pim.openPIMPage();
    // await pim.searchEmployee(employeeData.employeeName, employeeData.employeeId);
})

test.afterEach(async ({ page }) => {
   await page.close();
})

test('dashboard page', async ({ page }) => {
    const dashboard = new DashboardPage(page);
    await dashboard.verifyDashboardVisible();
})


test('admin page', async({page}) =>{

const admin = new AdminPage(page);
await admin.openAdminPage();
})

test('time page', async({page}) =>{

const time = new TimePage(page);
await time.openTimePage();
await time.navigateToTimesheets();
})

test ('PIM page', async ({page}) =>{
    
    const pim = new PIMPage(page);
    await pim.openPIMPage();
    await pim.searchEmployee(employeeData.employeeName, employeeData.employeeId);
})
