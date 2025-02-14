// Tee ohjelma, joka kysyy aluksi käyttäjältä, kuinka monta numeroa he haluavat syöttää.
// Saatuaan tämän tiedon ohjelman tulisi pyytää käyttäjää syöttämään jokainen näistä numeroista.
// Kun kaikki numerot on syötetty, ohjelman tulisi selvittää ja näyttää käyttäjän antamista numeroista pienin ja suurin.
// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.

let numCount = prompt("Kuinka monta numeroa haluat syöttää?");
let numArray = [];
for (let i = 0; i < numCount; i++) {
  numArray.push(prompt("Anna numero:"));
}
document.getElementById("box1").innerHTML = `Pienin numero on ${Math.min(
  ...numArray
)} ja suurin numero on ${Math.max(...numArray)}`;
