module.exports = {
    smallCar: {
        engineSize: 4,
        fuelType: 'diesel'
    },

    smallTruck: {
        engineSize: 6,
        fuelType: 'regular'
    },

    calculateVehicleRating: function (vehicle) {
        let rating = 0;

        switch (vehicle.engineSize) {
            case 1:
            case 2:
            case 3:
            case 4:
                rating = 10;
                break;
            case 5:
            case 6:
                rating = 8;
                break;
        };        

        switch (vehicle.fuelType) {
            case 'diesel':
                rating = rating +2;
                break; 
            case 'regular':
                rating = rating -2;
        };
            return rating;
    }
};

let smallCar = {
    engineSize: 4,
    fuelType: 'diesel'
};

let smallTruck = {
    engineSize: 6,
    fuelType: 'regular'
};

let vehicle = [];
vehicle.push(smallCar);
vehicle.push(smallTruck);

let rating = 0;
