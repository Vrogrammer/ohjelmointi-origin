let nimet = ['Tapio','Leela','Matti','Antti'];
console.log('Toinen listalla on '+nimet[1]);
console.log('Listan pituus on '+nimet.length+' merkkiä'); 
console.log('Viimeinen alkio: '+nimet[nimet.length - 1])
nimet.push('Pekka')
console.log('Lisätään pekka: '+nimet);
console.log('Lista välilyönneillä'+nimet.join(' '))
nimet.splice(2,1,"Liisa","Laila");
console.log("Matti pois, Liisa ja Laila tilalle: "+nimet);
nimet.sort();
console.log('Aakkosjärestyksessä: '+nimet)
let numerot = [1, 7, 45, 32, 27, 86];
console.log('Numerot: '+numerot)
numerot.sort(function(a,b){return a-b});
console.log('Numerot järjestettynä: '+numerot);
numerot.sort(function(a,b){return 0.5 - Math.random();});
console.log('Numerot sekoitettuna: '+numerot);
console.log('Suurin arvo: '+numerot.sort(function(a,b){return a-b})[numerot.length-1]);
console.log('Pienin arvo: '+numerot.sort(function(a,b){return a-b})[0]);
