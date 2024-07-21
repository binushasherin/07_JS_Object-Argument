var planet = "Jupiter";
var bigPlanet = planet.toUpperCase();

console.log(planet + " becomes " + bigPlanet);

function getBig(str) {
    return str.toUpperCase();
}

function getSmall(str) {
    return str.toLowerCase();
}


console.log(getBig("Hello World"));
console.log(getSmall("Hello World"));