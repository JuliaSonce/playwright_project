import BaseComponent from "../BaseComponentClass";
const { expect } = require('@playwright/test');

export default class SignInForm extends BaseComponent {
    //Locators 
    email = () => this.container.locator('#signinEmail');
    password = () => this.container.locator('#signinPassword');
    loginBtn = () => this.container.locator('.btn btn-primary');
    rememberMeCheckbox = () => this.container.locator('.form-check');
    forgotPasswordBtn = () => this.container.locator('app-signin-form .btn.btn-link');
    registrationLink = () => this.container.locator('.modal-footer .btn-link')

    //Action
    async fillLogInData(user) {
        await this.email().fill(user.email);
        await this.password().fill(user.password);
    };
    async loginBtnClick() {
        await this.loginBtn().click()
    }
}