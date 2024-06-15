const base = require('@playwright/test');
import GaragePage from '../src/pageObjects/pages/GaragePage';

exports.test = base.test.extend({
    newGaragePage: async ({ page }, use) => {
        const newGaragePage = new GaragePage(page);
        await newGaragePage.navigate();

        await use(newGaragePage);
    }
});

exports.expect = base.expect;
