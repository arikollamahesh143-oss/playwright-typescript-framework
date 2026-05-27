import {Page,Locator} from '@playwright/test'

export class LoginPage{

    readonly page:Page;
    readonly username:Locator;
    readonly password:Locator;
    readonly loginButton:Locator;

    constructor (page:Page){
        this.page=page;
        this.username=page.locator('input[name="username"]');
        this.password=page.locator('input[name="password"]');
        this.loginButton=page.locator('button[type="submit"]');

    }
async navigatetoLoginPage(){
    await this.page.goto('https://opensource-demo.orangehrmlive.com/');

}

async login(user:string, pass:string){
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginButton.click();
}
async verifyLoginSuccess(){
    await this.page.waitForSelector('text=Dashboard');
}
}
