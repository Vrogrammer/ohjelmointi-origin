// Tee ohjelma, joka tulostaa verkkosivulle kaikki parittomat numerot 1 ja 100 välillä. Eli 1, 3, 5, 7, 9, 11 jne.
let g = "";
for (let i = 1; i < 100; i += 2) {
  console.log(i);
  g += `${i} `;
}
document.getElementById("box1").innerHTML = g;
console.log(g);
