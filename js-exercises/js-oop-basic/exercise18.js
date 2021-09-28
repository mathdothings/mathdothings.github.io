function isDOM(obj) {
    return !!(obj && obj.nodeType === 1);
}

let p = document.createElement('p');
p.textContent = 'Once upon a time.';


console.log(isDOM(p));
