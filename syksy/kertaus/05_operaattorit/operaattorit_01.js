/* 
- Luo muuttujat a ja b ja anna niille kokonaislukuarvot.
- Käytä yhteen-, vähennys-, kerto- ja jakolaskuoperaattoreita muuttujille a ja b. Tallenna jokainen tulos erilliseen muuttujaan (summa, erotus, tulo, osamäärä, jakojäännös).

- Käytä console.log() -metodia tulostamaan jokaisen operaation tulos konsoliin.

- Lisää kommentteja koodiin selittämään, mitä kukin operaatio tekee.
*/

// määritetään muuttuja a ja sen arovoksi luku 1
let a = 1;
// määritetään muuttuja b ja sen arovoksi luku 2
let b = 2;

//määritetään muuttuja "summa" ja sen arvoksi muuttujan "a" ja muuttujan "b" summa
let summa = a + b;
//määritetään muuttuja "erotus" ja sen arvoksi muuttujan "a" ja muuttujan "b" erotus
let erotus = a - b;
//määritetään muuttuja "tulo" ja sen arvoksi muuttujan "a" ja muuttujan "b" tulo
let tulo = a * b;
//määritetään muuttuja "osamäärä" ja sen arvoksi muuttujan "a" ja muuttujan "b" osamäärä
let osamäärä = a / b;
//määritetään muuttuja "jakojäännoös" ja sen arvoksi muuttujan "a" ja muuttujan "b" jakojäännös
let jakojäännös = a % b;

//tulostetaan konsoliin jokaisen operaation tulos
console.log(summa);
console.log(erotus);
console.log(tulo);
console.log(osamäärä);
console.log(jakojäännös);
