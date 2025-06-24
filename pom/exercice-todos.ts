// création du POM

import type { Page, Locator } from "@playwright/test"

    // Créer une classe que l'on pourra exporter
 
export class nextTodo {
    // créer les caractéristiques de la classe
    readonly page : Page
    readonly newTodoField : Locator
    readonly menuList : Locator
    //readonly clearChoice : Locator
    readonly checkTodo : Locator
    readonly clearCompleted : Locator

    // construction de la class avec les valeurs
    constructor(page: Page) {
        this.page = page
        // nouveau champ à remplir
        this.newTodoField = page.locator('.new-todo')
        // tri sur l'option des tâches : All Active Completed
        this.menuList = page.locator('.filters li')
        // effacer les tâches completed
        //this.clearChoice = page.locator('.clear-completed')
        // clic sur la tâche (si done)
        this.checkTodo = page.getByRole('listitem')
        // clic sur effacer (clear completed)
        this.clearCompleted = page.locator('.clear-completed')
    }



    //construction de la fonction
        async newTodo(newAction) {
        await this.newTodoField.fill(newAction)
        await this.newTodoField.press('Enter')
    }

        async triAction(newSelect) {
        await this.menuList.filter({ hasText: newSelect }).click()  
    }

    //     async EffaceChoix(effaceSelect) {
    //     await this.clearChoice.click(effaceSelect)  
    // }


        async checkToggleTodo(newTask) {
        await this.checkTodo.filter({ hasText: newTask }).getByLabel('Toggle Todo').check();
    }
}