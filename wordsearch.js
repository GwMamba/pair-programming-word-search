// pair programming assignment with David Giroux and Gerald Mwangi

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));

//   console.log("horizontal array", horizontalJoin);
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  // Transpose array to target vertical letters:
  const transpose = array => array[0].map((col, i) => array.map(row => row[i]));
  const transposedLetters = transpose(letters);

//   console.log("Tranposed array", transposedLetters);
  const verticalJoin = transposedLetters.map(ls => ls.join(''));

//   console.log(verticalJoin);
  for (l of verticalJoin) {
    if (l.includes(word)) return true;
  }
//   If word not found horizontal or vertical; return false:
  return false;

};

module.exports = wordSearch