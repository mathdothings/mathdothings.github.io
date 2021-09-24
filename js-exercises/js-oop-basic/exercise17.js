// Write a JavaScript function to check whether an object contains given property.

let game = {
    name: "Lufia",
    developers: "Neverland Co. Ltd",
    publisher: "Square Enix",
    genre: "RPG",
    platform: "SNES"
}

function isObject(obj) {
    type = typeof obj;
    return type === 'function' || type === 'object';
}

function getAllKeys(obj) {
    let keys = [];
    for (let key in obj) {
        keys.push(key);
    }

    return keys;
}

function hasProperty(obj, property) {
    let keys = getAllKeys(obj);
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] === property) {
            return true;
        }
    }

    return false;

}

console.log(hasProperty(game, 'genre')); // => true
