/* Kehitä funktio nimeltä assignGrade, joka:

Hyväksyy yhden argumentin, numeerisen pistemäärän.
Palauttaa kirjainarvosanan pistemäärän perusteella seuraavasti:
- 'A' pistemäärille 90 tai enemmän.
- 'B' pistemäärille 80-89.
- 'C' pistemäärille 70-79.
- 'D' pistemäärille 60-69.
- 'F' pistemäärille alle 60.
*/
function assignGrade(points) {
  if (points >= 90) {
    return "A";
  } else if (points >= 80 && points <= 89) {
    return "B";
  } else if (points >= 70 && points <= 79) {
    return "C";
  } else if (points >= 60 && points <= 69) {
    return "D";
  } else if (points < 60) {
    return "F";
  } else {
    return "Error";
  }
}

// Esimerkkikäyttö - älä muokkaa
console.log("Sinä sait " + assignGrade(95)); // Sinä sait A
console.log("Sinä sait " + assignGrade(81)); // Sinä sait B
console.log("Sinä sait " + assignGrade(72)); // Sinä sait C
console.log("Sinä sait " + assignGrade(64)); // Sinä sait D
console.log("Sinä sait " + assignGrade(42)); // Sinä sait F

// Treenaa: Keksi itse samanlainen funktio eri nimellä. Pisterajoja voi olla vähemmän kuin yllä.
pointsToGrade = (pts) => {
  if (pts >= 90) {
    return "A";
  } else if (pts >= 80 && pts <= 89) {
    return "B";
  } else if (pts >= 70 && pts <= 79) {
    return "C";
  } else if (pts >= 60 && pts <= 69) {
    return "D";
  } else if (pts < 60) {
    return "F";
  }
};

// Kutsu tekemääsi funktiota
console.log("Sinä sait " + assignGrade(1));
console.log("Sinä sait " + assignGrade(100));
console.log("Sinä sait " + assignGrade(69));
console.log("Sinä sait " + assignGrade("asd"));
console.log("Sinä sait " + assignGrade(-100));
