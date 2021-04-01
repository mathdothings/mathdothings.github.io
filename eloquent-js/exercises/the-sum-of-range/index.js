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

console.log(range(5, 2, -1));
