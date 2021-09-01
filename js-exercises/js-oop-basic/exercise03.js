//Write a JavaScript program to get the length of a JavaScript object.
Object.objectSize = function (obj) {
  let objSize = 0, key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) objSize++;
  }

  return objSize;
}

let student = {
  name: "mathdothings",
  sclass: "JS",
  rollno: 1
}

let objectSize = Object.objectSize(student);
console.log("Size of the current object: " + objectSize);
