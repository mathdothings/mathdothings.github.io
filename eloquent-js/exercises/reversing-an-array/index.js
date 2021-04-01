function reverseArray(givenArray) {
  let array = [];
  for (let x = givenArray.length - 1; x >= 0; x--) {
    array.push(givenArray[x]);
  }

  return array;
}

console.log(reverseArray([1, 2, 3, 4, 5])); // result: [5, 4, 3, 2, 1]

function reverseArrayInPlace(givenArray) {
  givenArray = reverseArray(givenArray);
  
  return givenArray;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5])); // result: [5, 4, 3, 2, 1]
