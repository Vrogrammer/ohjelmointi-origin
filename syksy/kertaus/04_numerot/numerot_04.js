/* Tehtävä: Ostoskori
  Kuvitellaan, että olet kehittämässä yksinkertaista verkkokauppasovellusta. 
  Sinun tehtäväsi on luoda ohjelma, joka laskee ostoskorissa olevien tuotteiden yhteishinnan ja tulostaa sen.
  - Määrittele muuttujat kullekin ostoskorissa olevalle tuotteelle ja niiden hinnoille.
  - Laske tuotteiden yhteishinta ja tallenna se muuttujaan, esimerkiksi yhteishinta.
  - Tulosta yhteishinta konsoliin.
 */
let tuote1Hinta = 1;
let tuote2Hinta = 2;
let tuote3Hinta = 3;
let tuote4Hinta = 4;
let tuote5Hinta = 5;

let ostoskori = [
  tuote1Hinta,
  tuote2Hinta,
  tuote3Hinta,
  tuote4Hinta,
  tuote5Hinta,
];
let yhteishinta = 0;
for (let i = 0; i < ostoskori.length; i++) {
  yhteishinta += ostoskori[i];
}
console.log(yhteishinta);
