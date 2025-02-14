// Tee ohjelma, joka tulostaa kaikki parilliset kokonaisluvut 1 ja 99 välillä, esittäen ne seuraavalla tavalla
// 2, 98, 4, 96, 6, 94 ja niin edelleen. Tulosta luvut samalle riville.
// Saat itse valita käytkö luvut läpi kaksi kertaa vai lopetatko lukuun 50.
let a = 98;
let b = 2;
let g = "";
for (i = 0; i < 49; i++) {
  g += ` ${a}, ${b},`;
  b += 2;
  a -= 2;
}
g = g.trim();
g = g.substring(0, g.length - 1);
document.getElementById("box1").innerHTML = g;
