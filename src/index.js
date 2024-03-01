console.log(
  "%cHello index.js line:1 ",
  "background: green; color: white; display: block;"
);

const saludar = (nombre) => `Hola mundo ${nombre}`; // arrow or lambda function

const nombre = "franco";

console.log(saludar(nombre));

const heroes = [
  {
    id: 1,
    name: "Batman",
  },
  {
    id: 2,
    name: "El Chavo",
  },
  {
    id: 3,
    name: "Superman",
  },
];

// option #1 using recursion
let heroIndx = 0;
const heroeExiste = (name) => {
  if (name === heroes[heroIndx].name) {
    heroIndx = 0;
    return `${name} sí existe!`;
  } else {
    heroIndx = heroIndx < heroes.length - 1 ? heroIndx + 1 : 0;

    if (heroIndx === 0) {
      return `${name} NO existe!`;
    }

    return heroeExiste(name);
  }
};

console.log(heroeExiste("Superman"));
console.log(heroeExiste("El Chavon"));
console.log(heroeExiste("Batman"));
console.log(heroeExiste("Batiman"));

// option #2 using some

const existeSome = heroes.some((h) => {
  return h.id === 1;
});
console.log(existeSome);

// option #3 using find

const existeFind = heroes.find((h) => {
  return h.id === 1;
});
console.log(existeFind.name);
