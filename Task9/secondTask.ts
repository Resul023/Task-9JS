interface AnimalCharacterType {
  type: string;
  biom: string;
  reservoir: boolean;
  areaSize: number;
  meal: string[];
  typeOfOrganism: boolean;
}
interface AnimalCharacter extends AnimalCharacterType {
  name: string;
  age: number;
  totalFoodPerDay: number;
}
interface biomFeature {
  name: string;
  reservoir: boolean;
  area: number;
  animals: AnimalCharacter[];
}
let Cat: AnimalCharacter = {
  name: "cat1",
  age: 5,
  totalFoodPerDay: 0.25,
  type: "cat",
  biom: "enclosure",
  reservoir: true,
  areaSize: 25,
  meal: ["meat"],
  typeOfOrganism: true,
};
let Cat2: AnimalCharacter = {
  name: "cat1",
  age: 5,
  totalFoodPerDay: 0.25,
  type: "cat",
  biom: "enclosure",
  reservoir: true,
  areaSize: 45,
  meal: ["meat"],
  typeOfOrganism: true,
};

let bio1: biomFeature = {
  name: "enclosure",
  reservoir: true,
  area: 150,
  animals: [],
};
let bio2: biomFeature = {
  name: "aviary",
  reservoir: true,
  area: 110,
  animals: [],
};
setAnimalInBiom(bio1, Cat);

function setAnimalInBiom(biom: biomFeature, animal: AnimalCharacter) {
  let biomGeneralArea;
  if (biom.animals.length > 0) {
    biomGeneralArea = biom.animals
      ?.map((x) => x.areaSize)
      .reduce((cur, acc) => (cur += acc));
  } else {
    biomGeneralArea = 0;
  }
  if (
    animal.biom.toUpperCase() === biom.name.toLocaleUpperCase() &&
    animal.reservoir === biom.reservoir &&
    animal.areaSize < biom.area - biomGeneralArea
  ) {
    biom.animals.push(animal);
  } else {
    alert("You cant add this animal to the biom");
  }
}
