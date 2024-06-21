import { test, expect, request } from '@playwright/test';

// const newCar = {
//     "carBrandId": 1,
//     "carModelId": 1,
//     "mileage": 122
// }
const ENDPOINT_CREATE_CAR = '/api/cars'
test.describe('API tests for adding cars to garage', () => {
    let apiContext;
    test.beforeAll(async ({ playwright }) => {
        apiContext = await playwright.request.newContext({
            baseURL: 'https://guest:welcome2qauto@qauto2.forstudy.space'
        });
    });
    test.afterAll(async () => {
        await apiContext.dispose();
    });
    test('POST Add and check car', async ({ page, request }) => {
        const newCar = {
            "carBrandId": 1,
            "carModelId": 1,
            "mileage": 122
        }
        const response = await apiContext.post(ENDPOINT_CREATE_CAR, {
            data: newCar,
        })

        expect(response).toBeOK();

        let bodyResult = await response.json();
        expect(bodyResult.data.carBrandId).toBe(newCar.carBrandId);
        expect(bodyResult.data.carModelId).toBe(newCar.carModelId);
        expect(bodyResult.data.mileage).toBe(newCar.mileage);
        await page.goto('https://qauto2.forstudy.space/panel/garage')

    });

    test('404 Route or entity not found', async ({ page, request }) => {
        const newCar = {
            "carBrandId": 1,
            "carModelId": 1,
            "mileage": 122
        }
        const response = await apiContext.post('api/cars/123', {
            data: newCar,
        })

        expect(response.status()).toBe(404);
        const responseBody = await response.json();
        expect(responseBody).toStrictEqual({
            status: 'error',
            message: 'Not found'
        })
        await page.goto('https://qauto2.forstudy.space/panel/garage')

    });

    test('Bad request  - Negative Test', async ({ page }) => {
        const invalidCarData = {
            "carBrandId": "invalid",
            "carModelId": 1,
            "mileage": 122
        };

        const response = await apiContext.post(ENDPOINT_CREATE_CAR, {
            data: invalidCarData,
        });
        expect(response.status()).toBe(400);
        const bodyResult = await response.json();
        expect(bodyResult).toStrictEqual({
            status: 'error',
            message: 'Invalid car brand type'
        })
        // expect(bodyResult.status).toBe("error");
        // expect(bodyResult.message).toBe("Bad request");
        await page.goto('https://qauto2.forstudy.space/panel/garage');
    });









    // test('Remove al cars', async ({ request }) => {

    //     const response = await request.get('/api/cars')
    //     expect(response).toBeOK();

    //     let bodyResult = await response.json();

    //     let carsArr = bodyResult.data;
    //     // console.log(bodyResult)
    //     for (let i = 0; i < carsArr.length; i++) {
    //         let carId = carsArr[i].id;

    //         let deleteResult = await request.delete(`/cars/${carId}`)
    //         console.log(deleteResult)
    //     }


    // })
});