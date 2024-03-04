const characters = ["francomac", "goku", "vegeta"];

const [sayayin, insecto, principe, sayaman = "goten"] = characters;

console.log("%cindex.js line:7 characters", "color: #007acc;", sayayin);
console.log("%cindex.js line:7 characters", "color: #007acc;", insecto);
console.log("%cindex.js line:7 characters", "color: #007acc;", principe);
console.log("%cindex.js line:7 characters", "color: #007acc;", sayaman);

const returnArray = ([letters, numbers]) => {
  return [letters, numbers];
};

const [letters, numbers] = returnArray(["xyz", 123]);
console.log(letters, numbers);
