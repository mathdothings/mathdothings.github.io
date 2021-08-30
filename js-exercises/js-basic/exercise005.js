
function rotateWord(id) {
  let word = document.getElementById(id).textContent;
  result = '';

  for (let n = word.length - 1; n >= 0;  n--) {
    result += word[n];
  }

  document.getElementById('target').innerHTML = result;
}

setInterval(rotateWord, 1);
