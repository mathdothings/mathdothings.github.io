// Heron's Formula
let a, b, c = 0;
a = 5;
b = 6;
c = 7;
let halfPerimeter = (a + b + c) / 2;

let area = Math.sqrt(halfPerimeter * (halfPerimeter - a) *
                    (halfPerimeter - b) * (halfPerimeter - c));

console.log(`Area is: ${area}`); // 14.696958...
