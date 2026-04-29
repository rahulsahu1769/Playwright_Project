import { chromium } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";
import {test as setup, expect} from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

// Load .env file first — before anything else runs
dotenv.config({ path: path.resolve(__dirname, '../.env') });

setup('authenticate', async ({page}) => {
    await page.goto('https://www.saucedemo.com');
    await page.fill('#user-name', process.env.USERNAME!);
    await page.fill('#password', process.env.PASSWORD!);
    await page.click('#login-button')

    await page.waitForURL('**/inventory.html');

    await page.context().storageState({path:'auth.json'});
});

// async function globalSetup(){

//     //Launch browser manually
//     const browser = await chromium.launch();

//     //Create a new page
//     const page = await browser.newPage();

//     //Use existing LoginPage class to login
//     const loginPage = new LoginPage(page);
//     await loginPage.goto();
//     await loginPage.login(process.env.USERNAME!, process.env.PASSWORD!);

//     //Save the session to disk
//     await page.context().storageState({path: 'auth.json'});

//     //Close the browser
//     await browser.close();

// }
// export default globalSetup;