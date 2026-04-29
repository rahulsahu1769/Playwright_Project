import { Page } from "@playwright/test";

export class LoginPage{

    //Store the page instance
    readonly page: Page;

    //Define the locators as properties
    readonly usernameInput;
    readonly passwordInput;
    readonly loginButton;

    //Constructor - receives page and assigns locators
    constructor(page: Page){
        this.page = page;
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button',{name: 'Login'});
    }

    //Methods - actions a user can perform on this page
    async goto() {
        await this.page.goto('https://www.saucedemo.com');
    }

    async login(username: string, password: string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}