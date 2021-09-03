Array.prototype.bubbleSortAlg = function () {
  let lowest = null;
  let sortedArray = [];
  let count = this.length;
  
  while (count > 0) {
    for (let x = 0; x < this.length; x++) {
      if (x === 0) {
        lowest = this[x];
      }
      else {
        if (this[x] < lowest) {
          lowest = this[x];
          }
        }
      }

    if (sortedArray.length === 0) {
      sortedArray.push(lowest);
      this.splice(this.indexOf(lowest), 1);
    }
    else {
      if (sortedArray.indexOf(lowest) === -1) {
        sortedArray.push(lowest);
        this.splice(this.indexOf(lowest), 1);
      }
    }

  count--;
  }

  return sortedArray;
}

console.log([2, 3, -4].bubbleSortAlg());
