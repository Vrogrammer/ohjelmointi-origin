let luku = prompt("Anna luku 1-10: ");
if (isNaN(luku) || luku < 1 || luku > 10) {
  document.querySelector("#box1").innerHTML = "Et antanut lukua välillä 1-10";
} else {
  let x = Math.floor(Math.random() * 11);
  let juuri = Math.sqrt(luku);
  document.querySelector("#box2").innerHTML =
    "Annoit luvun " +
    luku +
    " ja tietokone antoi luvun " +
    x +
    ". " +
    Math.max(luku, x) +
    " on suurempi";
  document.querySelector("#box3").innerHTML =
    "Lukusi neliöjuuri on " + juuri.toFixed(2);
}

let aakkoset = "abcdefghijklmnopqrstuvwxyzöä";
document.querySelector("#box4").innerHTML =
  "Suomen kielessä on " + aakkoset.length + " kirjainta.";

let teksti =
  "Ohjelmistokehittäjä osaa ohjelmoida, hyödyntää rajapintoja, käsitellä tietoa sekä käyttää versionhallintaa. Ohjelmistokehitystiimin jäsenenä toimiessaan hän kommunikoi asiakkaan kanssa, suunnittelee ohjelmiston toteutuksen ja varmistaa toteutettavien toimintojen laadun.";

document.querySelector("#box5").innerHTML =
  '"ohjelmoida" löytyy kohdasta ' + teksti.indexOf("ohjelmoida");

document.querySelector("#box6").innerHTML = "Osa 1: " + teksti.slice(0, 107);
document.querySelector("#box7").innerHTML =
  "Osa 2: " + teksti.slice(107, teksti.length);

document.querySelector("#box8").innerHTML =
  "Muookkaus: " +
  teksti.replace("versionhallintaa", "versionhallintaa (esimerkiksi GitHub)");

let numerot = prompt("Anna viisi lukua pilkulla eroteltuna (esim. 1,2,3,4,5):");
let luvut = numerot.split(",");
let summa = 0;
for (let i = 0; i < luvut.length; i++) {
  summa += parseInt(luvut[i]);
}
document.querySelector("#box9").innerHTML = "Lukujen summa on " + summa;
