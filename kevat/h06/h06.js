let pisteet = parseInt(prompt("Pisteet: "));
if (pisteet < 0 || pisteet > 40 || isNaN(pisteet)) {
  box1 = "Pistemäärä ei välillä 0 - 40";
} else if (pisteet >= 0 && pisteet <= 15) {
  box1 = "Arvosana: tyydyttävä";
} else if (pisteet >= 16 && pisteet <= 30) {
  box1 = "Arvosana: hyvä";
} else if (pisteet >= 31 && pisteet <= 40) {
  box1 = "Arvosana: kiitettävä";
}

hinta = parseFloat(prompt("Anna hinta (desimaalina): "));
alennus = 1.0;
if (hinta >= 100) {
  hinta = `Hinta alennuksella: ${hinta * 0.8}€`;
} else if (hinta < 100 && hinta >= 50) {
  hinta = `Hinta alennuksella: ${hinta * 0.9}€`;
} else if (hinta < 50) {
  hinta = `Hinta: ${hinta}€`;
} else {
  hinta = `Anna hinta`;
}
document.querySelector("#box1").innerHTML = box1;
document.getElementById("box2").innerHTML = hinta;
