

  // Exercice 1
    // Given I am logged as "standard_user"
    // I logout
    // I am back on the login page

import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://www.saucedemo.com/');
//   await page.getByTestId('username').click();
//   await page.getByTestId('username').fill('standard_user');
//   await page.getByTestId('password').click();
//   await page.getByTestId('password').fill('secret_sauce');
//   await page.getByTestId('login-button').click();
//   await page.getByTestId('add-to-cart-sauce-labs-backpack').click();
//   await page.getByTestId('shopping-cart-link').click();
//   await page.getByTestId('checkout').click();
   
// });


// // Exercice 2
//   // Given : I am on the login page
//   // When : I try to log with the "locked_out_user" credentials
//   // Then : I see an error message
// test('test2', async ({ page }) => {

//   await page.goto('https://www.saucedemo.com/');
 
//   await page.getByTestId('username').click();
//   await page.getByTestId('username').fill('locked_out_user');
//   await page.getByTestId('password').click();
//   await page.getByTestId('password').fill('secret_sauce');
//   await page.getByTestId('login-button').click();
//   await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible();

// });


test('test3', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByTestId('username').click();
  await page.getByTestId('username').fill('standard_user');
  await page.getByTestId('password').click();
  await page.getByTestId('password').fill('secret_sauce');
  await page.getByTestId('login-button').click();

  // Filtrer du plus cher au moins cher 
  await page.getByText('Name (A to Z)Name (A to Z)').click();
  await page.getByTestId('product-sort-container').selectOption('hilo');
  
  // Ajouter les deux 1ers articles
  await page.getByTestId('add-to-cart-sauce-labs-fleece-jacket').click();
  await page.getByTestId('add-to-cart-sauce-labs-backpack').click();

  // Aller au panier
  await page.getByTestId('shopping-cart-link').click();
  await page.getByTestId('checkout').click();

  // Renseigner les infos et validerr la commande
  await page.getByTestId('firstName').click();
  await page.getByTestId('firstName').fill('Mitch');
  await page.getByTestId('lastName').click();
  await page.getByTestId('lastName').fill('Dom');
  await page.getByTestId('postalCode').click();
  await page.getByTestId('postalCode').fill('59000');
  await page.getByTestId('continue').click();
  await page.getByTestId('finish').click();
  await expect(page.getByText('Thank you for your order!')).toBeVisible();
   
});
