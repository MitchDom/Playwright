    // await page.locator('.new-todo').click();
    // await page.locator('.new-todo').fill('nouvelle demande');
    // await page.locator('.new-todo').press('Enter');
    // await expect(page.locator('nouvelle demande')).toBeVisible();

// 1. créer le Page Object Model

// 2. optimisation : 

import { test, expect } from '@playwright/test';
import { nextTodo } from '../pom/exercice-todos.ts' // importation du POM par sa class NextTodo

test('test-todos', async ({ page }) => {

    const todoPage = new nextTodo(page) //instance
    // se rendre sur la page dont l'url est
    await page.goto('https://demo.playwright.dev/todomvc/#/');

    // insérer le texte "Acheter un tiramisu" dans le champ "What needs to be done?"
    await todoPage.newTodo('Acheter un tiramisu')
    // vérifier que le texte "Acheter tiramisu" s'affiche bien sur la page
    await expect(page.getByText('Acheter un tiramisu')).toBeVisible();

    // insérer le texte "Remplir agenda" dans le champ "What needs to be done?"
    await todoPage.newTodo('Remplir agenda')
    // vérifier que le texte "Remplir agenda" s'affiche bien sur la page
    await expect(page.getByText('Remplir agenda')).toBeVisible();

    // Cocher la case "Done" pour la tâche "REmpli agenda"
    await todoPage.checkToggleTodo('Remplir agenda')
    

    // Faire un tri sur les tâche "Completed"
    await todoPage.triAction('Completed')

    // Effacer les tâches "Completed"
    await todoPage.clearCompleted.click()

});