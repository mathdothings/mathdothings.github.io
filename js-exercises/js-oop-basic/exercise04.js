let library = [
  {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
  },
  {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
  },
  {
    author: 'Suzanne Collins',
    title: 'Mockingjay: The Final Book of The Hunger Games',
    readingStatus: false
  }
]

for (let n = 0; n < library.length; n++) {
  let book = "'" + library[n].title + " by " + library[n].author + ".";
  if (library[n].readingStatus) {
    console.log("Already read: " + book);
  } 
  else {
    console.log("You still need to read: " + book);
  }
}
