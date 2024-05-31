import BasePage from "../BasePageClass.js";

export default class HomePage extends BasePage {
    constructor(page) {
        super(page, `/panel/garage`)
    }

    //Locators
    logOutButton = () => this.page.locator('.d-flex.flex-column.sidebar > .btn.btn-link.btn-sidebar.sidebar_btn.text-danger', { hasText: 'Log out ' })

    //Action

}

