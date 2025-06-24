import type { Page, Locator } from "@playwright/test"
//créer une classe
export class productListPage {
// créer les propriétés ou caractéristiques de la classe
    readonly page: Page
    readonly filtre : Locator
    readonly addJacket : Locator
    readonly addBackPack : Locator
    readonly cartLink : Locator
// construction de la calsse en donnant des valeurs à ses proriétes
    constructor(page: Page) {
        this.page = page
        this.filtre = page.getByTestId('product-sort-container')
        this.addJacket = page.getByTestId('add-to-cart-sauce-labs-fleece-jacket')
        this.addBackPack = page.getByTestId('add-to-cart-sauce-labs-backpack')
        this.cartLink = page.getByTestId('shopping-cart-link')
    }
// Création de la fonction
    async trierSurListeDeroulante(option) {
        await this.filtre.selectOption(option)
    }

    async addToCart() {
        await this.addJacket.click();
        await this.addBackPack.click();

    }

}




