const { Template } = require("ejs");

// Alkuperäinen joukko tiimin jäseniä
let teamMembers = ["Jukka", "Emilia", "Miikka", "Saara"];

// Harjoitus 1: Käy läpi `teamMembers` ja kirjaa jokainen nimi konsoliin.
// Kirjoita koodisi tähän:
for (member of teamMembers) {
  console.log(member);
}
// Harjoitus 2: Poista ensimmäinen jäsen taulukosta.
// Kirjoita koodisi tähän:
teamMembers.shift();
// Harjoitus 3: Poista taulukon viimeinen jäsen.
// Kirjoita koodisi tähän:
teamMembers.pop();
// Harjoitus 4: Lisää uusi jäsen "Aleksi" taulukon alkuun.
// Kirjoita koodisi tähän:
teamMembers.unshift("Aleksi");
// Harjoitus 5: Lisää uusi jäsen "Linda" taulukon loppuun.
// Kirjoita koodisi tähän:
teamMembers.push("Linda");
// Harjoitus 6: Luo uusi taulukko, joka ei sisällä kahta ensimmäistä jäsentä.
// Kirjoita koodisi tähän:
teamMembers2 = teamMembers.slice(2);
// Harjoitus 7: Etsi "Miikka" indeksi taulukossa.
// Kirjoita koodisi tähän:
indexOfMiikka = teamMembers.indexOf("Miikka");
// Harjoitus 8: Yritä löytää "Jaakko" indeksi (joka ei ole taulukossa).
// Kirjoita koodisi tähän:
indexOfJaakko = teamMembers.indexOf("Jaakko");
// Harjoitus 9: Käytä `splice` poistaaksesi "Miikka" ja lisätäksesi "Karoliina" ja "Bettina" hänen tilalleen.
// Kirjoita koodisi tähän:
teamMembers.splice(indexOfMiikka, 1, "Karoliina", "Bettina");
// Harjoitus 10: Liitä uusi jäsen "Hemmo" taulukon loppuun ja luo uusi taulukko.
// Kirjoita koodisi tähän:
teamMembers3 = teamMembers.push("Hemmo");
// Harjoitus 11: Käyttäen `slice` kopioidaksesi koko taulukon
// Kirjoita koodisi tähän:
teamMembers4 = teamMembers;
// Harjoitus 12: Yhdistä taulukot käyttäen `concat`
teamMembers5 = teamMembers.concat(teamMembers2);
// Oletetaan, että `newMembers`-taulukko on määritelty
let newMembers = ["Tiina", "Daniel"];
// Kirjoita koodisi tähän:

// Harjoitus 13: Etsi kaikki Jukan esiintymät
// Kirjoita koodisi tähän:
let jukkaIndexes = [];
let i = 0;
teamMembers.forEach((member) => {
  if (member === "Jukka") {
    jukkaIndexes.push(i);
  }
  i++;
});
// Harjoitus 14: Muuta jäsenet `map` avulla kirjoitettavaksi ISOILLA KIRJAIMILLA
// Kirjoita koodisi tähän:
teamMembers = teamMembers.map((member) => member.toUpperCase());
