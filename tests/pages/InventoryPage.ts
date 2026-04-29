import { Page } from "@playwright/test";

export class InventoryPage{

    readonly page: Page;
    readonly addToCartButton;
    readonly cartBadge;
    readonly pageTitle;
    

    constructor(page: Page){
        this.page = page;
        this.addToCartButton = page.getByRole('button', {name: 'Add to cart'}).first();
        this.cartBadge = page.getByTestId('shopping-cart-badge');
        this.pageTitle = page.getByTestId('title');
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/inventory.html');
        waitUntil: 'networkidle';
    }

    async addFirstItemToCart(){
        await this.addToCartButton.click();
    }

    async getCartBadgeCount(){
        return await this.cartBadge.innerText();
    }

    async getPageTitle(){
        return await this.pageTitle.innerText();
    }
}