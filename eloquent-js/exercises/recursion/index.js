function isEven(n) {
  if (n < 0) return isEven(Math.abs(n));
  if (n == 0 ) return true;
  else if (n == 1) return false;
  else {
    return isEven(n - 2);
  }
}

console.log(isEven(-15)); // result: false
