import BaseComponent from "../BaseComponentClass";
import GaragePage from "../pages/GaragePage";

export default class AddCar extends BaseComponent {
    // constructor(page, container, car) {
    //     this.car = car
    //     super(page, container);
    // }

    //Locators 
    brandDropdownField = () => this.container.locator('select#addCarBrand');
    modelDropdownField = () => this.container.locator('select#addCarModel');
    mileageInputField = () => this.container.locator('input#addCarMileage');
    cancelBtn = () => this.container.locator('.btn.btn-secondary');
    addBtn = () => this.container.getByRole('button', { name: 'Add' })

    //Action 
    async addCar(car) {
        await this.brandDropdownField().selectOption(car.brand);
        await this.modelDropdownField().selectOption(car.model);
        await this.mileageInputField().click()
        await this.mileageInputField().fill("1001");
        await this.addBtn().click();
    }
}    
