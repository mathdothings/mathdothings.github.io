// Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
let game = {
    name: "Lufia",
    developers: "Neverland Co. Ltd",
    publisher: "Square Enix",
    genre: "RPG",
    platform: "SNES"
}

function isObject(obj) {
    let type = typeof obj;
    return type === 'function' || type === 'object';
}

function getAllKeys(obj) {
    let keys = [];
    for (let property in obj) {
        keys.push(property);
    }

    return keys;
}

function getAllValues(obj) {
    let keys = getAllKeys(obj);
    let values = [];
    for (let i = 0; i < keys.length; i++) {
        values.push(obj[keys[i]]);
    }

    return values;
}

function getAllPairsKeysValues(obj) {
    let keys = getAllKeys(obj);
    let values = getAllValues(obj);
    let pair = Array(keys.length);
    
    for (let i = 0; i < pair.length; i++) {
        pair[i] = [keys[i], [values[i]]];
    }

    return pair;
}

console.log(getAllPairsKeysValues(game)); // =>
/*
 * ['name', 'Lufia'],
 * ['developers', 'Neverland Co. Ltd'],
 * ['Publisher', 'Square Enix'],
 * ['genre', 'RPG'],
 * ['platform', 'SNES']
*/
