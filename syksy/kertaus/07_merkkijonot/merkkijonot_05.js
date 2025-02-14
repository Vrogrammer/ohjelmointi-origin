// Muokkaa funktio getLastCharacter palauttamaan saamansa merkkijonon viimeinen merkki

function getLastCharacter(name) {
  return name.slice(name.length - 1);
}

// Esimerkki - älä muokkaa
console.log(getLastCharacter("Sam")); // "m"
console.log(getLastCharacter("Alex")); // "x"
console.log(getLastCharacter("Charley")); // "y"

// Treenaa: Keksi itse samanlainen funktio eri nimellä
lastChar = (str) => str.slice(str.length - 1);

// Kutsu tekemääsi funktiota
console.log(lastChar("lihis"));
