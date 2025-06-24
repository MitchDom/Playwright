// Exercice 3
// Given I am logged as "standard_user"
// When I sort the list in "hilo" order
// And I add the first "2" items in the cart
// And I go to the cart
// And I order as "Raphael" "Darras" habitant au "59000"
// And order informations are correct
// And I finalize the order
// Then the order is confirmed

import { test, expect } from '@playwright/test';
import { LoginPage } from  '../pom/login1.ts';
import { productListPage } from '../pom/productList.ts';
import { validationPanier } from '../pom/validCart.ts'

test('test3', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const productPage = new productListPage(page)
  const formulaireValidationPanier = new validationPanier(page)

  await page.goto('https://www.saucedemo.com/');
  
  await loginPage.login('standard_user', 'secret_sauce');


  // Filtrer du plus cher au moins cher 
  await productPage.trierSurListeDeroulante('hilo')
  // Ajouter les deux 1ers articles
  await productPage.addToCart()
  // Aller au panier
  await productPage.cartLink.click();
  await page.getByTestId('checkout').click();

  // Renseigner les infos et valider la commande
  await formulaireValidationPanier.addInfos('Mitch', 'Dom', '59000')

  // Afficher la page de validation de la commande
  await expect(page.getByText('Thank you for your order!')).toBeVisible();
   
});
