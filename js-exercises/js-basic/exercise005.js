function rotateWord() {
  let string = document.getElementById('target');
  let reversedWord = '';

  for (let letter = string.length - 1; letter >= 0; letter--) {
    reversedWord += string.substring(letter, letter + 1);
  }

  document.getElementById('target').innerHTML = reversedWord;
}
// ECROUSER3W

function changeName() {
  let word = document.getElementById('target');
  word.innerHTML = "mathdothings";
}
