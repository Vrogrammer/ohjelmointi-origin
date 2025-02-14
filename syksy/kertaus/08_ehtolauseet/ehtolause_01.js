// Toteuta funktio canVote siten, että se palauttaa arvon true aina kun ikä on 18 tai enemmän ja false muissa tapauksissa.

function canVote(age) {
  return age >= 18;
}

// Esimerkkikäyttö - älä muuta
console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(10)); // false

// Treenaa: Keksi itse samanlainen funktio eri nimellä
voteRight = (age) => age >= 18;

// Kutsu tekemääsi funktiota
console.log(voteRight(-100));
