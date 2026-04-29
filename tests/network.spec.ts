import {test, expect} from '@playwright/test'

test('Block image in inventory page', async({page}) => {

    //Setup interception before navigate
    await page.route('**/*.{png,jpg}', route => {
        route.abort();
    });

    await page.goto('https://www.saucedemo.com/inventory.html');

    await expect(page.getByTestId('title')).toHaveText('Products');
});

test('Mock a response in the inventory page', async({page}) => {

    await page.route('**/inventory.html', route => {
        route.fulfill({
            status: 401,
            body: 'Access Denied - Mocked Response'
        });
    });

    await page.goto('https://www.saucedemo.com/inventory.html');

    await expect(page.locator('body')).toContainText('Access Denied - Mocked Response');
});