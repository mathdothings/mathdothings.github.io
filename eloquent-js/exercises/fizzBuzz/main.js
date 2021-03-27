for (let n = 1; n <= 100; n++) {
  if (n % 3 == 0 && n % 5 == 0) {
    console.log(n + " => FizzBuzz");
  }

  else if (n % 3 == 0) {
    console.log(n + " => Fizz");
  } else if (n % 5 == 0) {
    console.log(n + " => Buzz");
  }
}
