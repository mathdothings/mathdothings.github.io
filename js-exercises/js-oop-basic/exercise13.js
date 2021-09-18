// Write a JavaScript function to retrieve all the names of object's own and inherited properties.

class Student {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }

    isObject(obj) {
        this.type = typeof obj;
        this.type === 'object' ? true : false;
        return this.type;
    }
}

let myStd = new Student("math", 28);

function getAllKeys(obj) {
    if (!obj.isObject(obj)) return [];
    let keys = [];
    for (let key in obj) {
        keys.push(key);
    }
    return keys;
}

console.log(getAllKeys(myStd)); // => [ 'name', 'age', 'type' ]
