import BasePage from "../BasePageClass.js";

export default class MainPage extends BasePage {
    constructor(page) {
        super(page, '/')
    }

    //Locators
    singUpBtn = () => this.page.locator('.hero-descriptor_btn', { hasText: 'Sign up' })
    modalRegistrationForm = () => this.page.locator('div.modal-content');

    //Action
    async clickSignUpBtn() {
        await this.singUpBtn().click();
        return new MainPage(this.page)
    }
}
