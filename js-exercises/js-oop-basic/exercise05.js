class Cylinder {
  constructor (radius, height) {
    this.radius = radius;
    this.height = height;
  }

  get volume() {
    return this.calcVolume();
  }

  calcVolume() {
    return ((this.radius**2) * Math.PI * this.height);
  }
}

myCylinder = new Cylinder(2, 5);
console.log(myCylinder.volume);
