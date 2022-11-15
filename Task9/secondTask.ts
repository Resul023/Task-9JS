interface AnimalCharacterType {
  type: string;
  biom: string;
  reservoir: number;
  areaSize: number;
  meal: string[];
  typeOfOrganism: boolean;
}
interface AnimalCharacter extends AnimalCharacterType {
  name: string;
  age: number;
  totalFoodPerDay: number;
}

let Cat: AnimalCharacter = {
  name: "cat1",
  age: 5,
  totalFoodPerDay: 0.25,
  type: "cat",
  biom: "enclosures",
  reservoir: 10,
  areaSize: 25,
  meal: ["meat"],
  typeOfOrganism: true,
};
