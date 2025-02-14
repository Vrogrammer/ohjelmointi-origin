/* Kirjoita funktio nimeltä pluralize, joka:

Hyväksyy kaksi argumenttia: substantiivin ja numeron.
Palauttaa merkkijonon, joka yhdistää numeron ja sopivasti taipuvan muodon substantiivista, kuten '5 kissaa' tai '1 koira'.
*/

function pluralize(substantiivi, määrä) {
  if (määrä != 1) {
    if (/[^i]i$/gi.test(substantiivi)) {
      return substantiivi + "a";
    } else if (/[öä]$/gi.test(substantiivi)) {
      return substantiivi + "ä";
    } else {
      return substantiivi + "a";
    }
  } else {
    return substantiivi;
  }
}

// Esimerkkikäyttö - älä muokkaa
console.log("Minulla on 0 " + pluralize("kala", 0));
console.log("Minulla on 1 " + pluralize("koira", 1));
console.log("Minulla on 7 " + pluralize("papukaija", 7));

// Treenaa: Keksi itse samanlainen funktio eri nimellä.
pluralize = (word, amount) => {
  if (amount != 1) {
    if (/[^i]i$/gi.test(word)) {
      return word + "a";
    } else if (/[öä]$/gi.test(word)) {
      return word + "ä";
    } else {
      return word + "a";
    }
  } else {
    return word;
  }
};
// Kutsu tekemääsi funktiota
console.log("0 " + pluralize("kala", 0));
console.log("2 " + pluralize("koira", 2));
console.log("7 " + pluralize("papukaija", 7));
