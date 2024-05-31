import BaseComponent from "./BaseComponentClass";

export default class BasePage extends BaseComponent {
    constructor(page, url, container) {
        const wrapper = container ?? page.locator('html');
        super(page, wrapper);
        this._url = url;
    }

    async navigate() {
        await this.open();
        await this.waitLoaded(this.container);
    }

    async open() {
        await this.page.goto(this._url)
    }
}