import type {Page, Locator} from "@playwright/test"

//créer une classe
export class LoginPage {
    // créer les propriétés ou caractéristiques de la classe
    readonly page: Page
    readonly usernameField: Locator 
    readonly passwordField: Locator 
    readonly loginButton: Locator 

// construction de la classe en donnant des valeurs à ses propriétes
    constructor(page: Page) {
        this.page = page
        this.usernameField = page.getByTestId('username')
        this.passwordField = page.getByTestId('password')
        this.loginButton = page.getByTestId('login-button')
    }

    async login(username, password) {
        await this.usernameField.fill(username)
        await this.passwordField.fill(password)
        await this.loginButton.click()
    }
}