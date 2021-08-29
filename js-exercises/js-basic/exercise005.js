function rotateWord() {
  let string = document.getElementById('target').textContent;
  let rotatedWord = '';

  for (let letter = string.length - 1; letter >= 0; letter--) {
    rotatedWord += string.substring(letter, letter + 1);
  }

  document.getElementById('target').textContent = rotatedWord;
}
// ECROUSER3W
