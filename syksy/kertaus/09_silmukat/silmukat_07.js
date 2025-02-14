// Tee ohjelma, joka kysyy kymmentä numeroa. Ohjelma laskee ja tulostaa summan ja keskiarvon sekä
// tulostaa pienimmän ja suurimman numeron.
// Tähän on ainakin kaksi vaihtoehtoa, löydät ne esimerkkivastaukset - kansiosta
// Koska käytössä on prompt, tämä toimii selaimessa html-sivun kautta.
let numSum = 0;
let numCount = 0;
let numList = [];
let ansBox = document.getElementById("box1");
for (i = 0; i < 10; i++) {
  let num = prompt(`Anna luku numero ${i + 1}:`);
  numSum += parseInt(num);
  numCount++;
  numList.push(parseInt(num));
}
let numMin = Math.min(...numList);
let numMax = Math.max(...numList);
console.log(`Lukujen
    summa: ${numSum}
    keskiarvo: ${numSum / numCount}
    suurin arvo: ${numMax}
    pienin arvo: ${numMin}`);
ansBox.innerHTML = `Lukujen
    summa: ${numSum}
    keskiarvo: ${numSum / numCount}
    suurin arvo: ${Math.max(...numList)}
    pienin arvo: ${Math.min(...numList)}`;
