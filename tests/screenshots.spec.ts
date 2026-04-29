import {test, expect} from '@playwright/test'

test('Full page screenshot of inventory', async({page}) => {
    await page.goto('https://www.saucedemo.com/inventory.html');

    await expect(page).toHaveScreenshot('inventory.png');
});

test('Element screenshot of first product card', async({page}) => {
    await page.goto('https://www.saucedemo.com/inventory.html');

    await expect(page.getByTestId('inventory-item').first()).toHaveScreenshot('first-item.png');
});