// @ts-check
const { test, expect } = require('@playwright/test');



test.describe('Test garage ', () => {
    test('Go to the home page ', async ({ page }) => {
        await page.goto('/');
    });
});
