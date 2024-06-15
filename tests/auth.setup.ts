import { test as setup, expect } from '@playwright/test';
const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  await page.goto('https://qauto2.forstudy.space')
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByLabel('Email').fill("TestTestowichyou@gmail.com")
  await page.locator('#signinPassword').fill("TestTest123!")
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForURL('https://qauto2.forstudy.space/panel/garage');

  await expect(page.getByRole('button', { name: 'Add car' })).toBeVisible();
  await page.context().storageState({ path: authFile });
  //  await browser.close();

});