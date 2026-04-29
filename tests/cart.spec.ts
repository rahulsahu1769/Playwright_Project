import {test, expect} from './fixtures/MyFixtures';
import { InventoryPage } from './pages/InventoryPage';

test('Verify user is able to add item to cart', async({page, inventoryPage, cartPage}) => {
    await inventoryPage.goto();
    await inventoryPage.addFirstItemToCart();
    await cartPage.goto();

    const itemName = await cartPage.getItemName();
    expect(itemName).toBe('Sauce Labs Backpack');
});

test('Verify the price of the added item in the cart', async({inventoryPage, cartPage}) => {
    await inventoryPage.goto();
    await inventoryPage.addFirstItemToCart();
    await cartPage.goto();

    const itemPrice = await cartPage.getItemPrice();
    expect(itemPrice).toBe('$29.99');
});

test('Verify the badge count after adding an item to the cart', async({inventoryPage}) => {
    await inventoryPage.goto();
    await inventoryPage.addFirstItemToCart();
    
    const badgeCount = await inventoryPage.getCartBadgeCount();
    expect(badgeCount).toBe('1');
});

test('Verify continue shopping button navigates back', async({page, inventoryPage, cartPage}) => {
    await inventoryPage.goto();
    await cartPage.goto();
    await cartPage.clickContinueShopping();

    expect(page.url()).toContain('inventory');
});

test('Verify page title on inventory page', async ({inventoryPage}) => {
    await inventoryPage.goto();
    const pageTitle = await inventoryPage.getPageTitle();

    expect(pageTitle).toBe('Products');

});