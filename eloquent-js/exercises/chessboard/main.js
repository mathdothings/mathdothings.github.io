let bindingSize = 16;
let OddBoardLine = EvenBoardLine = "";

for (let n = 1; n <= bindingSize; n++) {
  if (n % 2 == 0) {
    for (let h = 1; h <= bindingSize; h++) {
      if (h % 2 != 0) {
        EvenBoardLine += "#";
      } else {
        EvenBoardLine += " ";
      }
    }

    console.log(EvenBoardLine);
    EvenBoardLine = "";

  } else {
    for (let i = 1; i <= bindingSize; i++) {
      if (i % 2 != 0) {
        OddBoardLine += " ";
    } else {
      OddBoardLine += "#";
  }
  }

    console.log(OddBoardLine);
    OddBoardLine = "";
  
  }
}

