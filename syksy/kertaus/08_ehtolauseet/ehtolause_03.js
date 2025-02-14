// Täydennä funktio evenOrOdd siten, että se palauttaa merkkijonon "even", kun se saa parametriksi parillisen luvun, ja muuten "odd".

function evenOrOdd(number) {
  if (number % 2 == 0) {
    return "even";
  } else if (number % 2 != 0) {
    return "odd";
  } else {
    return "not a number";
  }
}

// Esimerkkikäyttö - älä muokkaa
console.log(evenOrOdd(25)); // "odd"
console.log(evenOrOdd(18)); // "even"
console.log(evenOrOdd(-17)); // "odd"

// Treenaa: Keksi itse samanlainen funktio eri nimellä
oddOrEven = (num) => {
  if (num % 2 == 0) {
    return "even";
  } else if (num % 2 != 0) {
    return "odd";
  } else {
    return "not a number";
  }
};

// Kutsu tekemääsi funktiota
console.log(oddOrEven(3.141));
