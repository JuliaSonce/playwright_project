
const { test, expect } = require('../../fixtures/userGaragePage')
import AddCar from '../../src/pageObjects/components/addCar';
const car = {
    brand: "BMW",
    model: "X5",
    mileage: "200"
}
test('Add new car', async ({ newGaragePage }) => {
    //let newGaragePage = new newGaragePage(page);
    await newGaragePage.navigate()
    //await page.goto('https://qauto2.forstudy.space/panel/garage');

    await newGaragePage.clickAddCarrBtn();
    await expect(newGaragePage.addCarModal()).toBeVisible()// modal is visible on garage page
    let addCarContainer = newGaragePage.addCarModal();
    let addCar = new AddCar(newGaragePage, addCarContainer)
    await addCar.addCar(car)
    await expect(newGaragePage.alertPopUp()).toBeVisible()

})