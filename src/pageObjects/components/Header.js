import BaseComponent from "../BaseComponentClass";


export default class Header extends BaseComponent {
    constructor(page) {
        super(page, page.locator('header'));
    }



    //Locators
    homeBtn = () => this.page.locator('.btn header-link -active', { hasText: 'Home' });
    aboutBtn = () => this.page.locator('btn header-link -active', { hasText: 'About' });
    contactsBtn = () => this.page.locator('btn header-link -active', { hasText: 'Contacts' });
    guestLoginBtn = () => this.page.locator('btn header-link -active', { hasText: 'Guest log in' });
    signInBtn = () => this.page.locator('btn header-link -active', { hasText: 'Sign In' });



    //Action
    async clickHomeBtn() {
        await this.homeBtn().click();
    };

    async clickAboutBtn() {
        await this.aboutBtn().click();
    };

    async clickContactsBnt() {
        await this.contactsBtn().click();
    };
    async clickGuestLoginBtn() {
        await this.guestLoginBtn().click();
    };

    async clickSignInBtn() {
        await this.signInBtn().click();

    };

}