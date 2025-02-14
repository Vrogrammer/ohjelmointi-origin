// Kehitä ohjelma, joka jatkaa käyttäjän pyytämistä syöttämään numeroita, kunnes käyttäjä syöttää 0.
// Tässä vaiheessa ohjelma lopettaa toimintansa.
// Lopetettuaan ohjelman tulisi laskea ja näyttää kaikkien syötettyjen numeroiden keskiarvo.
// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.
let numSum = 0;
let numCount = 0;
while (true) {
  num = prompt("Anna lukuja, joiden keskiarvo lasketaan. 0 lopettaa: ");
  if (num == 0 || isNaN(num)) {
    break;
  } else {
    numSum += parseInt(num);
    numCount++;
  }
}
document.getElementById("box1").innerHTML = `Lukujesi keskiarvo on ${
  numSum / numCount
}`;
