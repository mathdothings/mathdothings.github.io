function range (start, end, step = 1) {
  let array = [];
  if (end > start) {
    if (step >= 1) {
      for (let x = start; x <= end; x+= step) {
        array.push(x);
      }

      return array;
    }
  }

  if (end < start) {
    if (step <= -1) {
      for (let x = start; x >= end; x+= step) {
        array.push(x);
      }

      return array;
    }
  }
}

function sum(givenArray) {
  let sum = 0;
  for (let x = 0; x < givenArray.length; x++) {
    sum += givenArray[x];
  }

  return sum;
}

console.log(sum(range(1, 3)));
