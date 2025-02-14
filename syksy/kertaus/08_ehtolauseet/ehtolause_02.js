/* Tätä ohjelmaa varten tarvitaan verkkosivua, eli se ei toimi pelkästään konsolissa.
 Joten tee ensin html sivu ja linkkaa tämä tiedosto siihen. Prompt-ikkuna aukeaa sivulle, testaa Live serverin avulla.
 Luo ohjelma getTemperature, joka kysyy käyttäjältä lämpötilaa Celsius-asteina ja sitten tulostaa, pitäisikö heidän pukea takki päälle (jos lämpötila on alle 15°C) vai ei.
*/
function getTemperature(temp) {
  if (temp < 15) {
    return "Laita takki päälle";
  } else {
    return "Et tarvitse takkia";
  }
}

let esimerkki = prompt("Mikä on nykyinen lämpötila?");

let numero = Number(esimerkki);

console.log(getTemperature(numero));

// Treenaa: Keksi itse samanlainen funktio eri nimellä
doYouNeedAJacket = (temp) => {
  if (temp < 15) {
    return "Laita takki päälle huomenna";
  } else {
    return "Et tarvitse takkia huomenna";
  }
};

// Kutsu tekemääsi funktiota
let astetta = prompt("Mikä on lämpötila huomenna?");
console.log(doYouNeedAJacket(astetta));
