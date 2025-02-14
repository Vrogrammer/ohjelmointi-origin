// Muokkaa funktio capitalize palauttamaan saamansa sana kirjoitettuna vain isolla alkukirjaimella

function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

// Esimerkki - älä muokkaa
console.log(capitalize("sam")); // "Sam"
console.log(capitalize("ALEX")); // "Alex"
console.log(capitalize("chARLie")); // "Charlie"

// Treenaa: Keksi itse samanlainen funktio eri nimellä
firstLetterCapitalizer = (string) =>
  string[0].toUpperCase() + string.substring(1);

// Kutsu tekemääsi funktiota
console.log(firstLetterCapitalizer("kebab"));
