//Muokkaa funktio getFirstCharacter palauttamaan saamansa merkkijonon ensimmäinen merkki

function getFirstCharacter(name) {
  return name.slice(0, 1);
}

// Esimerkki - älä muokkaa
console.log(getFirstCharacter("Amsterdam")); // "A"
console.log(getFirstCharacter("Japan")); // "J"

// Treenaa: Keksi itse samanlainen funktio eri nimellä
firstChar = (str) => str.slice(0, 1);

// Kutsu tekemääsi funktiota
console.log(firstChar("lihapiirakka"));
