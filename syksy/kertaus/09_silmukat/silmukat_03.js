// Luo ohjelma, joka pyytää jatkuvasti käyttäjää syöttämään etäisyyden (kilometreinä) ja ajan (tunteina) ja laskee sitten keskinopeuden.
// Ohjelman tulisi lopettaa, kun käyttäjä syöttää 0 etäisyydeksi. Saadessaan etäisyyden 0 ohjelman ei pitäisi pyytää enempää syöttöä.
// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.

let etaisyys, aika;
while (true) {
  let etaisyys = prompt("Etäisyys (km): (0 lopettaa) ");
  if (etaisyys == 0) {
    break;
  }
  aika = prompt("Aika (h): ");
  let keskinopeus = etaisyys / aika;
  alert(`Keskinopeus on ${keskinopeus}km/h`);
}
