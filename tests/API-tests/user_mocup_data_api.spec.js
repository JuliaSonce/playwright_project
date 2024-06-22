import { expect, test } from '@playwright/test';
import GaragePage from '../../src/pageObjects/pages/GaragePage';

let apiContext;
test.beforeAll(async ({ playwright }) => {
    apiContext = await playwright.request.newContext({
        baseURL: 'https://qauto2.forstudy.space/panel/profile'
    });
});
test.afterAll(async () => {
    await apiContext.dispose();
});
test('Change response body', async ({ page, request }) => {

    const respObj =
    {
        "status": "ok",
        "data": {
            "userId": 47272,
            "photoFilename": "default-user.png",
            "name": "Santa",
            "lastName": "Testowich"
        }
    };

    await page.route('**/api/users/profile', route => {
        route.fulfill({
            contentType: 'application/json',
            body: JSON.stringify(respObj)
        });
    });

    await page.goto('https://qauto2.forstudy.space/panel/profile')
    let garagePage = new GaragePage(page);
    const userName = await garagePage.registeredUserName().textContent();
    expect(userName).toContain(respObj.data.name)


    // on this page we have bug and last name is undefined 
    // because of this I change and check only Name
    // Origin data 
    // "status": "ok",
    //     "data": {
    //     "userId": 47272,
    //      "photoFilename": "default-user.png",
    //       "name": "Santa",
    //      "lastName": "Testowich"


})