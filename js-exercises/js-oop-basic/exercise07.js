String.prototype.subset = function() {
  let result = [];
  let index = 0;
  let gap = 0;

  // calculate amount of possibilities
  function factorial(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    else {
      return n * factorial(n - 1);
    }
  }

  for (let x = 0; x < factorial(this.length); x++) {
    if (x >= this.length) {
      if (x === this.length) {
        index = Math.round(((x / 2) - 1));
        gap = 1;
      }  
      index = Math.round(((x / 2) - 1));
      gap++;
    }
    else {
      index = 0;
      gap++;
    }
    result.push(this.substring(index, gap));
  }

  return result;
}

console.log("dog".subset()); // ==> ["d", "do", "dog", "o", "og, "g"].
