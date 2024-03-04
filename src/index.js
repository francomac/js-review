console.log(
  "%cHello index.js line:1 ",
  "background: green; color: white; display: block;"
);

// ==============================================

import { getHeroByOwner, getHeroById } from "./bases/08-imp-exp";

console.log(
  "%cindex.js line:20 getHeroById",
  "color: #007acc;",
  getHeroById(2)
);

console.log(
  "%cindex.js line:20 getHeroById",
  "color: #007acc;",
  getHeroByOwner("Marvel")
);
