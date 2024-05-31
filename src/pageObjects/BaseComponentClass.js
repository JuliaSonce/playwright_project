export default class BaseComponent {
    constructor(page, container) {
        this.page = page;
        this.container = container;
    }

    async waitLoaded() {
        //await this.page.locator(this.container).waitFor();
        await this.container.waitFor();
    }
}

