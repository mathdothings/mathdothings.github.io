/* Write a JavaScript program to calculate the area and perimeter of a circle.
 * Note : Create two methods to calculate the area and perimeter.
 * The radius of the circle will be supplied by the user.
*/
class Circle {
  constructor(diameter) {
    this.diameter = diameter;
  }

  Area() {
    // return object's area
    let result = Math.PI * (this.diameter / 2);
    return result.toFixed(2);
  }

  Perimeter() {
    // return object's perimeter
    let result = Math.PI * 2 * (this.diameter / 2);
    return result.toFixed(2);
  }
}

let myCircle = new Circle(5);
console.log('Area: ' + myCircle.Area());
console.log('Perimeter: ' + myCircle.Perimeter());
