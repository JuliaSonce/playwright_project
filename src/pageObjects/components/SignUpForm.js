import BaseComponent from "../BaseComponentClass";
const { expect } = require('@playwright/test');

export default class SignUpForm extends BaseComponent {

    //Locators 
    nameInput = () => this.container.locator('#signupName');
    lastNameInput = () => this.container.locator('input#signupLastName');
    emailInput = () => this.container.locator('input#signupEmail');
    passwordInput = () => this.container.locator('input#signupPassword');
    repeatPasswordInput = () => this.container.locator('input#signupRepeatPassword')
    registerButton = () => this.container.locator('.btn-primary');
    invalidFeedbackName = () => this.container.locator('.invalid-feedback')
    invalidFeedbackLastName = () => this.container.locator('.invalid-feedback')
    invalidPasswordFeedback = () => this.container.locator('.invalid-feedback');
    invalidEmailFeedback = () => this.container.locator('.invalid-feedback');




    //Action 

    async fillData(user) {
        await this.nameInput().fill(user.firstName);
        await this.lastNameInput().fill(user.lastName);
        await this.emailInput().fill(user.email);
        await this.passwordInput().fill(user.password);
        await this.repeatPasswordInput().fill(user.password);

    }

    async validateInvalidInputForName(expectedText) {
        expect(await this.invalidFeedbackLocator(), "Check that text is valid");
    }
    async validationInvalidLastName(text) {
        expect(await this.invalidFeedbackLastName(), "Check that text is valid")
    }

    async validationInvalidEmail(expectedText) {
        expect(await this.invalidEmailFeedback(), "Check that text is valid")
    }

    async validationInvalidPassword(expectedText) {
        expect(await this.invalidPasswordFeedback(), "Check that text is valid")
    }

    async registrationBtnClick() {
        await this.registerButton().click({ force: true });
    };




}

