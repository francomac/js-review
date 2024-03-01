const notCommonArray = new Array(100); // its not a definition very common

const commonArray = [1, 2, 3];
commonArray.push(5); // add to end

const anotherCommonArray = [...commonArray]; // spread operator
anotherCommonArray.push(6);

const mappedArray = anotherCommonArray.map((n) => {
  return n * 2;
});
mappedArray.push(14);

console.log("commonArray", commonArray);
console.log("anotherCommonArray", anotherCommonArray);
console.log("mappedArray", mappedArray);
