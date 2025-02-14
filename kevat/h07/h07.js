let luvut = [];
let luku = parseInt(prompt('anna positiivinen luku: '));
for (let i = 1; i <= luku; i++) {
    if (i % 2 == 0) {
        luvut.push(i);
    }
}
document.getElementById('t1').innerHTML = luvut.join(' ');

let numero = 0;
let summa = 0;
let i = 0;
do {
    summa = summa + numero;
    i++;
    numero = parseInt(prompt('Anna lukuja, -1 lopettaa: '));
} while (numero != -1);
document.getElementById('t2').innerHTML = `Lukujen summa on ${summa} ja keskiarvo ${summa / (i -1)}`;

let bruh = '';
let lause = 'Javascript on sekä selainpuolen että palvelinpuolen ohjelmointikieli';
let sanat = lause.split(' ');
let tulostus = document.getElementById('t3');
for (word of sanat) {
    tulostus.innerHTML += (word + '<br>');
}

let uppertaulukko = [];
let tulostus2 = document.getElementById('t4');
lause.split(' ').forEach(function(word) {
    uppertaulukko.push(word.toUpperCase());
});
for (word of uppertaulukko) {
    tulostus2.innerHTML += (word + '<br>');
}