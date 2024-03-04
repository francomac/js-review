console.log(
  "%cHello index.js line:1 ",
  "background: green; color: white; display: block;"
);

// ==============================================

import { getHeroByOwner, getHeroById } from "./bases/08-imp-exp";

// console.log(
//   "%cindex.js line:20 getHeroById",
//   "color: #007acc;",
//   getHeroById(2)
// );

// console.log(
//   "%cindex.js line:20 getHeroById",
//   "color: #007acc;",
//   getHeroByOwner("Marvel")
// );

// ==============================================
// bare promise

// console.log("inicio");

// new Promise((resolve, reject) => {
//   console.log("promise body");
//   // resolve("promise resolved", true);
//   reject("promise error", false);
// })
//   .then((msg) => {
//     console.log("resolved msg: ", msg);
//   })
//   .catch((err) => {
//     console.log("error msg: ", err);
//   });

// console.log("fin");

// ==============================================

const getHeroeById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);

      if (hero) {
        resolve(hero);
      } else {
        reject(`${id} NO existe`);
      }
    }, 1800);
  })
    .then((heroFound) => console.log(heroFound))
    .catch(console.log);
};

getHeroeById(3);
getHeroeById(33);
