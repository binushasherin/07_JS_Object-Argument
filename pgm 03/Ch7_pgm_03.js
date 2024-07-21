
var buildPlanet;
var getPlanetInfo;
var planet1;
var planet2;
buildPlanet = function (name, position, type, radius, rank) {
    return {
        name: name,
        position: position,
        type: type,
        radius: radius,
        sizeRank: rank
    };
};

getPlanetInfo = function (planet) {
    return planet.name.toUpperCase() + ": planet " + planet.position;
};

planet1 = buildPlanet("Jupiter", 5, "Gas Giant", 69911, 1);
planet2 = buildPlanet("Neptune", 8, "Ice Giant", 24622, 4);

console.log(getPlanetInfo(planet1));
console.log(getPlanetInfo(planet2));


var car1;
var car2;

createcar = function (brand, model, year, price) {
    return {
        brand: brand,
        model: model,
        year: year,
        price: price,
    };
};

getCarInfo = function (car) {
    return car.brand.toUpperCase() + ": car " + car.model;
};

car1 = createcar('toyota', 'corolla', 2020, 20000);
car2 = createcar('honda', 'civic', 2021, 35000);

console.log(getCarInfo(car1));
console.log(getCarInfo(car2));