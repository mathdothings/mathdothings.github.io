let myObj = {
    num: 10,
    age: "28 years",
    height: "1.58m"
};

function getKeys(obj) {
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

console.log(getValues(myObj));
