
const { test, expect } = require('../../fixtures/userGaragePage')
import AddCar from '../../src/pageObjects/components/AddCar';
const car = {
    brand: "BMW",
    model: "X5",
    mileage: "200"
}
test('Add new car', async ({ newGaragePage }) => {

    await newGaragePage.navigate()
    await newGaragePage.clickAddCarrBtn();
    await expect(newGaragePage.addCarModal()).toBeVisible()// modal is visible on garage page
    let addCarContainer = newGaragePage.addCarModal();
    let addCar = new AddCar(newGaragePage, addCarContainer)
    await addCar.addCar(car)
    await expect(newGaragePage.alertPopUp()).toBeVisible()

})