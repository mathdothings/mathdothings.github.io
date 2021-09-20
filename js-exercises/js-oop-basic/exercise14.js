// Write a JavaScript function to retrieve all the values of an object's properties.

let myObj = {
    num: 10,
    age: "28 years old",
    height: "1.58m"
};

function isObject(obj) {
    let type = typeof obj;
    return type === 'function' || type === 'object';
}

function getKeys(obj) {
    if (!isObject(obj)) return [];
    let keys = [];
    for (let key in obj) {
       keys.push(key);
    }

    return keys;
}

function getValues(obj) {
    let keys = getKeys(obj);
    let values = [];
    for (let i = 0; i < keys.length; i++) {
        values.push(obj[keys[i]]);
    }

    return values;
}

console.log(getValues(myObj)); // => [ 10, '28 years old', '1.58m' ]
console.log(getValues(123)); // => []
