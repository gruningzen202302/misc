console.log("Leet Code in JS");






// /**
//  * Function to calculate combinations.
//  * @param {Array} elements - The input array.
//  * @returns {Array} An array with all the array combinations.
//  */
// const combinationsRecursive = (elements) => {
//   if (elements.length === 0) return [[]];
//   const firstElement = elements[0];
//   const restElements = elements.slice(1);
//   const combinationsWithoutFirst = combinationsRecursive(restElements);
//   const combinationsWithFirst = [];

//   //   for (const combination in combinationsWithoutFirst) {
//   //   }

//   combinationsWithoutFirst.forEach((combination) => {
//     const combinationWithFirst = [...combination, firstElement];
//     combinationsWithFirst.push(combinationWithFirst);
//   });
//   return [...combinationsWithoutFirst, ...combinationsWithFirst];
// };

// console.log("Case: Empty Array");
// console.log(combinationsRecursive([]));

// console.log("Case: One Element");
// console.log(combinationsRecursive(["a"]));

// console.log("Case: Many Elements(diagram)");
// console.log(combinationsRecursive(["a", "b", "c"]));
