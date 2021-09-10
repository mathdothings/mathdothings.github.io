/* Write a JavaScript program to calculate the area and perimeter of a circle.
 * Note : Create two methods to calculate the area and perimeter.
 * The radius of the circle will be supplied by the user.
*/
class Circle {
  constructor(diameter) {
    this.diameter = diameter;
    this.radius = diameter / 2;
  }

  Area() {
    // return object's area
    this.result = Math.PI * this.radius ** 2;
    return this.result.toFixed(2);
  }

  Perimeter() {
    // return object's perimeter
    this.result = Math.PI * 2 * this.radius;
    return this.result.toFixed(2);
  }
}

let myCircle = new Circle(3);
console.log('Area: ' + myCircle.Area());
console.log('Perimeter: ' + myCircle.Perimeter());
