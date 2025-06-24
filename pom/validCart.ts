import type { Page, Locator } from "@playwright/test"
//créer une classe
export class validationPanier {
// créer les propriétés ou caractéristiques de la classe
    readonly page: Page
    readonly firstName : Locator
    readonly lastName : Locator
    readonly postalCode : Locator
    readonly continue : Locator
    readonly finish : Locator
    
// construction de la classe en donnant des valeurs à ses propriétes
    constructor(page: Page) {
        this.page = page
        this.firstName = page.getByTestId('firstName')
        this.lastName = page.getByTestId('lastName')
        this.postalCode = page.getByTestId('postalCode')
        this.continue = page.getByTestId('continue')
        this.finish = page.getByTestId('finish')
        
    }

    async addInfos(prenom, nom, codePostal) {
        await this.firstName.fill(prenom);
        await this.lastName.fill(nom);
        await this.postalCode.fill(codePostal);
        await this.continue.click();
        await this.finish.click();
    }

}




