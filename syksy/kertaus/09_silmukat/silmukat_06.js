/* Kehitä ohjelma, joka aluksi kysyy käyttäjältä yhtä numeroa. Tämän jälkeen ohjelma kysyy, haluaako käyttäjä 
jatkaa numeroiden antamista seuraavalla kysymyksellä: 'Haluatko jatkaa numeroiden antamista? (k/e)'. 
Jos käyttäjä vastaa 'k', ohjelma pyytää toista numeroa. Jos vastaus on 'e', ohjelma lopettaa. 
Lopetettuaan ohjelma laskee ja näyttää kaikkien syötettyjen numeroiden keskiarvon.
Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta. */

let numSum = 0;
let numCount = 0;
let ansBox = document.getElementById("box1");
while (true) {
  let num = prompt("Anna numero:");
  if (isNaN(num)) {
    alert("Ei ole numero");
  } else {
    numCount++;
    numSum += parseInt(num);
  }
  let next = prompt("Haluatko jatkaa numeroiden antamista? (k/e)");
  if (next !== "k") {
    if (numCount != 0) {
      ansBox.innerHTML = `Lukujesi keskiarvo on ${Math.floor(
        numSum / numCount
      )}`;
      console.log(
        `Lopetit, summa on ${numSum}, keskiarvo on ${numSum / numCount}`
      );
    } else {
      ansBox.innerHTML = `Et antanut lukuja`;
      console.log(`Lopetit, Et antanut lukuja`);
    }
    break;
  }
}
