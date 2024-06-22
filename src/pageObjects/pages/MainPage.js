import { expect } from "playwright/test";
import BasePage from "../BasePageClass.js";

export default class MainPage extends BasePage {
    constructor(page) {
        super(page, '/')
    }

    //Locators
    // singUpBtn = () => this.page.locator('.btn.btn-primary.hero-descriptor_btn')
    singUpBtn = () => this.page.locator('.hero-descriptor_btn').filter({ hasText: 'Sign up' })
    modalRegistrationForm = () => this.page.locator('div.modal-content');

    //Action




    async clickSignUpBtn() {
        try {
            await this.singUpBtn().click();
            //return new MainPage(this.page)
        } catch (error) {
            console.log('Error during click action:', error);
        }
    }

}
