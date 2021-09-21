// Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.

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

function getAllValues(obj) {
    let values = [];
    let keys = getAllKeys(obj);
    for (let i = 0; i < keys.length; i++) {
        values.push(obj[keys[i]]);
    }

    return values;
}

function getAllPairsKeysValues(obj, reverse = false) {
    let keys = getAllKeys(obj);
    let values = getAllValues(obj);
    let pairs = [];
    if (reverse) {
        for (let i = 0; i < keys.length; i++) {
            pairs.push([values[i], keys[i]]);
        }
    }

    else {
        for (let i = 0; i < keys.length; i++) {
            pairs.push([keys[i], values[i]]);
        }
    }

    return pairs;
}

console.log(getAllPairsKeysValues(game, true)); // =>
/*
 * [
 * 'Lufia', 'name',
 * 'Neverland Co Ltd.', 'developers',
 * 'Square Enix', 'publisher',
 * 'RPG', 'genre',
 * 'SNES', 'platform'
 * ]
*/
