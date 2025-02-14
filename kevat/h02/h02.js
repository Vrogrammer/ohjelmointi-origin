let nimi = prompt('Nimesi:');
console.log("Nimi: "+nimi);
document.getElementById('lol1').innerHTML = ('Hei, '+nimi+'!');
let vuosi = prompt('Syntymävuotesi: ');
console.log('Syntymävuosi: '+vuosi)
document.getElementById('lol2').innerHTML = (`Olet syntynyt vuonna ${vuosi} ja olet siis tänä vuonna ${2024-vuosi} vuotta vanha`);
