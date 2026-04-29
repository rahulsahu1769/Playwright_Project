import {test as base} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import {CartPage} from '../pages/CartPage';

//Define the type
type MyFixtures = {
    loginPage: LoginPage
    inventoryPage: InventoryPage
    cartPage: CartPage
}

//Extend base test
export const test = base.extend<MyFixtures>({

    //Each fixture follows the exact pattern
    loginPage: async({page}, use) => {
        //Setup - create the page object and to the prep work
        const loginPage = new LoginPage(page);

        //Hand it to the test
        await use(loginPage);

        //Teardown - optional if any cleanup is needed
    },

    inventoryPage: async({page}, use) =>{

        const inventoryPage = new InventoryPage(page);
        await use(inventoryPage);
    },

    cartPage: async({page}, use) => {

        const cartPage = new CartPage(page);
        await use(cartPage);
    }
});

//Re-export expect so you import from one place
export {expect} from '@playwright/test';