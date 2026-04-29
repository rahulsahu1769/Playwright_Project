import {test, expect} from '@playwright/test';

test('Title should be correct', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
});

test('Verify the login functionality', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    const usernameInput = page.getByPlaceholder('Username');
    const passwordInput = page.getByPlaceholder('Password');
    const loginButton = page.getByRole('button',{name: 'Login'});

    await usernameInput.fill('standard_user');
    await passwordInput.fill('secret_sauce');
    await loginButton.click();

    await expect(page).toHaveTitle('Swag Labs');

});