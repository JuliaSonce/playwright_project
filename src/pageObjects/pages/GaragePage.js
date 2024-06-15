const { expect } = require('@playwright/test');
import BasePage from "../BasePageClass.js";

export default class GaragePage extends BasePage {
    constructor(page) {
        super(page, `/panel/garage`)
    }

    //Locators
    logOutButton = () => this.page.locator('.d-flex.flex-column.sidebar > .btn.btn-link.btn-sidebar.sidebar_btn.text-danger', { hasText: 'Log out ' })
    carsCard = () => this.page.locator('car jumbotron');
    addedCarModal = () => this.page.locator('.modal-content');
    updatedMileage = () => this.page.locator('.update-mileage-form_input form-control ng-untouched ng-pristine ng-valid')
    addCarrBtn = () => this.page.getByRole('button', { name: 'Add car' });
    garagePanel = () => this.page.locator('panel - page_heading d - flex justify - content - between')
    addCarModal = () => this.page.locator('.modal-content')
    carCards = () => this.page.locator('app-car > .car.jumbotron')
    alertPopUp = () => this.page.locator('.alert.alert-success')
    //Action
    async clickAddCarrBtn() {
        await this.addCarrBtn().click();

    }

    async successAlertIsVisible() {
        await this.alertPopUp()
        await expect(alertPopUp).toBeVisible();
    }

    async navigate(url) {
        await this.page.goto('https://qauto2.forstudy.space/panel/garage');
    }

}
