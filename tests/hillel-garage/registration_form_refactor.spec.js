// import { test, expect } from '@playwright/test';
// import MainPage from '../../src/pageObjects/pages/MainPage';
// import SignUpForm from '../../src/pageObjects/components/SignUpForm';
// import GaragePage from '../../src/pageObjects/pages/GaragePage';

// const { faker } = require('@faker-js/faker');


// const newUser = {
//     firstName: faker.name.firstName(),
//     lastName: faker.name.lastName(),
//     email: `aqa-${faker.internet.email()}`,
//     password: faker.internet.password()

// }


// test.describe("Test Sing up form", () => {
//     let mainPage;
//     test.beforeEach(async ({ page }) => {
//         mainPage = new MainPage(page);
//         await page.goto('/');

//     })

//     test('Sign up form with correct data', async ({ page }) => {
//         await mainPage.clickSignUpBtn(page);
//         let formPageContainer = mainPage.modalRegistrationForm()
//         let signUpForm = new SignUpForm(page, formPageContainer);
//         let garagePage = new GaragePage(page)
//         await signUpForm.fillData(newUser);
//         await signUpForm.registrationBtnClick();
//         await expect(page).toHaveURL(`https://qauto2.forstudy.space/panel/garage`);
//         await expect(garagePage.logOutButton()).toBeVisible()
//     });
//     test('Negative test1', async ({ page }) => { // checking that name field  do not accept more than 20 characters 
//         await mainPage.clickSignUpBtn()
//         let formPageContainer = mainPage.modalRegistrationForm()
//         let signUpForm = new SignUpForm(page, formPageContainer);
//         await signUpForm.nameInput().fill(`${newUser.firstName} hdsafdkljsakdfjsalfdjsaljdfksajfdkkkkkkkkkk`);
//         await signUpForm.lastNameInput().fill(newUser.lastName)
//         await expect(signUpForm.invalidFeedbackName()).toHaveText("Name is invalidName has to be from 2 to 20 characters long");
//         await expect(signUpForm.registerButton()).toBeDisabled();

//     });

//     test('Negative test2', async ({ page }) => { //name input filed shouldn't accept numbers
//         await mainPage.clickSignUpBtn();
//         let formPageContainer = mainPage.modalRegistrationForm();
//         let signUpForm = new SignUpForm(page, formPageContainer);
//         await signUpForm.nameInput().fill(`${newUser.firstName} 12345`);
//         await signUpForm.lastNameInput().fill(newUser.lastName)
//         await expect(signUpForm.invalidFeedbackName()).toHaveText("Name is invalid");
//         await expect(signUpForm.registerButton()).toBeDisabled();
//     })

//     test('Negative test3', async ({ page }) => { //password is not match 
//         await mainPage.clickSignUpBtn();
//         let formPageContainer = mainPage.modalRegistrationForm();
//         let signUpForm = new SignUpForm(page, formPageContainer);
//         await signUpForm.nameInput().fill(newUser.firstName);
//         await signUpForm.lastNameInput().fill(newUser.lastName);
//         await signUpForm.emailInput().fill(newUser.email);
//         await signUpForm.passwordInput().fill(newUser.password);
//         await signUpForm.repeatPasswordInput().fill(`@{newUser.password} !`);
//         await signUpForm.registrationBtnClick();
//         await expect(signUpForm.invalidPasswordFeedback()).toHaveText("Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter");
//         await expect(signUpForm.registerButton()).toBeDisabled();

//     });

//     test('Negative test4', async ({ page }) => { //Last name should be more that 2 characters 
//         await mainPage.clickSignUpBtn();
//         let formPageContainer = mainPage.modalRegistrationForm();
//         let signUpForm = new SignUpForm(page, formPageContainer);
//         await signUpForm.nameInput().fill(newUser.firstName);
//         await signUpForm.lastNameInput().fill("A")
//         await signUpForm.emailInput().fill(newUser.email);
//         await expect(signUpForm.invalidFeedbackLastName()).toHaveText("Last name has to be from 2 to 20 characters long");
//         await expect(signUpForm.registerButton()).toBeDisabled();
//     });

//     test('Negative test5', async ({ page }) => { //name input filed shouldn't accept symbols
//         await mainPage.clickSignUpBtn();
//         let formPageContainer = mainPage.modalRegistrationForm();
//         let signUpForm = new SignUpForm(page, formPageContainer);
//         await signUpForm.nameInput().fill(`${newUser.firstName} @`);
//         await signUpForm.lastNameInput().fill(newUser.lastName);
//         await expect(signUpForm.invalidFeedbackName()).toHaveText("Name is invalid");
//         await expect(signUpForm.registerButton()).toBeDisabled();

//     });
//     test('Negative test6', async ({ page }) => {//No empty spaces in email
//         await mainPage.clickSignUpBtn();
//         let formPageContainer = mainPage.modalRegistrationForm();
//         let signUpForm = new SignUpForm(page, formPageContainer);
//         await signUpForm.nameInput().fill(newUser.firstName);
//         await signUpForm.lastNameInput().fill(newUser.lastName)
//         await signUpForm.emailInput().fill(`    ${newUser.email}`);
//         await signUpForm.passwordInput().fill(newUser.password);
//         await expect(signUpForm.invalidEmailFeedback()).toHaveText("Email is incorrect");
//         await expect(signUpForm.registerButton()).toBeDisabled();

//     });

//     test('Negative test7', async ({ page }) => {//No-empty field in re-enter password 
//         await mainPage.clickSignUpBtn();
//         let formPageContainer = mainPage.modalRegistrationForm();
//         let signUpForm = new SignUpForm(page, formPageContainer);
//         await signUpForm.nameInput().fill(newUser.firstName);
//         await signUpForm.lastNameInput().fill(newUser.lastName)
//         await signUpForm.emailInput().fill(newUser.email);
//         await signUpForm.passwordInput().fill(newUser.password);
//         await signUpForm.registrationBtnClick()
//         await expect(signUpForm.registerButton()).toBeDisabled();
//     });

//     test('Negative test8', async ({ page }) => {//Not strong password.Only small letters in password  
//         await mainPage.clickSignUpBtn();
//         let formPageContainer = mainPage.modalRegistrationForm();
//         let signUpForm = new SignUpForm(page, formPageContainer);
//         await signUpForm.nameInput().fill(newUser.firstName);
//         await signUpForm.lastNameInput().fill(newUser.lastName)
//         await signUpForm.emailInput().fill(newUser.email);
//         await signUpForm.emailInput().fill('mamaolia');
//         await signUpForm.registrationBtnClick()
//         await expect(signUpForm.passwordInput()).toHaveCSS('border-color', "rgb(206, 212, 218)");
//         await expect(signUpForm.registerButton()).toBeDisabled();
//     });
//     test('Negative test9', async ({ page }) => {//Incorrect domain in email input field 
//         await mainPage.clickSignUpBtn();
//         let formPageContainer = mainPage.modalRegistrationForm();
//         let signUpForm = new SignUpForm(page, formPageContainer);
//         await signUpForm.nameInput().fill(newUser.firstName);
//         await signUpForm.lastNameInput().fill(newUser.lastName)
//         await signUpForm.emailInput().fill(`aqa-randomString@com`);
//         await signUpForm.registrationBtnClick()
//         await expect(signUpForm.invalidEmailFeedback()).toHaveText("Email is incorrect");
//         await expect(signUpForm.registerButton()).toBeDisabled();
//     });
//     test('Negative test10', async ({ page }) => {//All fields in registration form are empty 
//         await mainPage.clickSignUpBtn();
//         let formPageContainer = mainPage.modalRegistrationForm();
//         let signUpForm = new SignUpForm(page, formPageContainer);
//         await signUpForm.registrationBtnClick()
//         await expect(signUpForm.registerButton()).toBeDisabled();
//     });

// })

