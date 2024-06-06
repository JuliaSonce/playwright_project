import { test, expect } from '@playwright/test';


await page.goto('about:blank');
await page.goto('chrome-error://chromewebdata/');
test('test', async ({ page }) => {
  await page.locator('body').click();
}); await page.locator('#signupName').click();
await page.locator('#signupName').fill('Teest');
await page.locator('#signupLastName').click();
await page.locator('#signupLastName').fill('');
await page.locator('#signupLastName').press('ControlOrMeta+t');
await page.locator('#signupLastName').fill('Testowisch ');
await page.getByLabel('Name').click();
await page.getByLabel('Name').click();
await page.getByLabel('Name').click();
await page.getByLabel('Name').click();
await page.getByLabel('Name').click();
await page.getByLabel('Name').click();
await page.getByLabel('Password', { exact: true }).click();
await page.getByLabel('Re-enter password').click();
await page.getByRole('dialog').click();