const person = {
  name: "franco",
  age: 45,
  codeName: "francomac",
  power: "money",
};

const { name, age, codeName, power = "No Power" } = person;

console.log("%cindex.js line:14 name", "color: #007acc;", name);
console.log("%cindex.js line:14 age", "color: #007acc;", age);
console.log("%cindex.js line:14 codeName", "color: #007acc;", codeName);
console.log("%cindex.js line:14 power", "color: #007acc;", power); // comment this out

// =================================================

const createHero = ({ name, age, codeName, power = "No Power" }) => ({
  id: 123434234,
  name,
  age,
  codeName,
  power,
});

console.log(
  "%cindex.js line:29 createHero()",
  "color: #007acc;",
  createHero(person)
);
