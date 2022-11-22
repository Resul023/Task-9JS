var Cat = {
    name: "cat1",
    age: 5,
    totalFoodPerDay: 0.25,
    type: "cat",
    biom: "enclosure",
    reservoir: true,
    areaSize: 25,
    meal: ["meat"],
    typeOfOrganism: true
};
var Cat2 = {
    name: "cat1",
    age: 5,
    totalFoodPerDay: 0.25,
    type: "cat",
    biom: "enclosure",
    reservoir: true,
    areaSize: 45,
    meal: ["meat"],
    typeOfOrganism: true
};
var bio1 = {
    name: "enclosure",
    reservoir: true,
    area: 150,
    animals: []
};
var bio2 = {
    name: "aviary",
    reservoir: true,
    area: 110,
    animals: []
};
setAnimalInBiom(bio1, Cat);
function setAnimalInBiom(biom, animal) {
    var _a;
    var biomGeneralArea;
    if (biom.animals.length > 0) {
        biomGeneralArea = (_a = biom.animals) === null || _a === void 0 ? void 0 : _a.map(function (x) { return x.areaSize; }).reduce(function (cur, acc) { return (cur += acc); });
    }
    else {
        biomGeneralArea = 0;
    }
    if (animal.biom.toUpperCase() === biom.name.toLocaleUpperCase() &&
        animal.reservoir === biom.reservoir &&
        animal.areaSize < biom.area - biomGeneralArea) {
        biom.animals.push(animal);
    }
    else {
        alert("You cant add this animal to the biom");
    }
    console.log(biom.animals);
}
