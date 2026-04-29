import { Page } from "@playwright/test";

export class CartPage{

    readonly page: Page
    readonly cartIcon;
    readonly cartItemName;
    readonly cartItemPrice;
    readonly continueShoppingButton;

    constructor(page: Page){
        this.page = page;
        this.cartIcon = page.getByTestId('shopping-cart-link');
        this.cartItemName = page.getByTestId('inventory-item-name');
        this.cartItemPrice = page.getByTestId('inventory-item-price');
        this.continueShoppingButton = page.getByRole('button', {name: 'Continue Shopping'});
    }

    async goto(){
        await this.cartIcon.click();
    }

    async getItemName(){
        return await this.cartItemName.innerText();
    }

    async getItemPrice(){
        return await this.cartItemPrice.innerText();
    }

    async clickContinueShopping(){
        await this.continueShoppingButton.click();
    }
}