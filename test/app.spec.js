// use this library so we can test our code
const assert = require('assert');

// reference our app code so we can test it
// does not yet exist
const app = require('../app.js');

describe('Vehicle Rating Calculator', function (getVehicleRating) {
    it('calculates a rating of 12 for a vehicle with 4 cylinders', function () {
        const smallCar = app.smallCar;
        const rating = app.calculateVehicleRating(smallCar);
        assert.equal(rating, 12);
    });
    it('calculates a rating of 6 for a vehicle with 6 cylinders', function () {
        const smallTruck = app.smallTruck;
        const rating = app.calculateVehicleRating(smallTruck);
        assert.equal(rating, 6);
    });
});
