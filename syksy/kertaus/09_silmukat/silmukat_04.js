// Kehitä ohjelma, joka pyytää käyttäjää syöttämään 20 lukua. Kun kaikki luvut on syötetty,
//ohjelman tulisi näyttää, kuinka monta näistä luvuista on parillisia.
// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.
let parillisia = 0;
for (let i = 0; i < 20; i++) {
  let luku = prompt("Anna 20 lukua:");
  if (luku !== "" && luku % 2 === 0) {
    parillisia++;
  }
}
console.log(`Annoit ${parillisia} parillista lukua`);
if (parillisia > 1) {
  document.getElementById(
    "box1"
  ).innerHTML = `Annoit ${parillisia} parillista lukua`;
} else if (parillisia === 1) {
  document.getElementById("box1").innerHTML = `Annoit yhden parillisen luvun`;
} else {
  document.getElementById(
    "box1"
  ).innerHTML = `Et antanut yhtäkään parillista lukua`;
}
