import { expect, test } from '@playwright/test';
import GaragePage from '../../src/pageObjects/pages/GaragePage';
import AddCar from '../../src/pageObjects/components/addCar';
const car = {
    brand: "BMW",
    model: "X5",
    mileage: "200"
}
test.only('Add new car', async ({ page }) => {
    await page.goto('https://qauto2.forstudy.space/panel/garage');
    let garagePage = new GaragePage(page);
    await garagePage.clickAddCarrBtn();
    await expect(garagePage.addCarModal()).toBeVisible()// modal is visible on garage page
    let addCarContainer = garagePage.addCarModal();
    let addCar = new AddCar(page, addCarContainer)
    await addCar.addCar(car)
    await expect(garagePage.alertPopUp()).toBeVisible()

})


