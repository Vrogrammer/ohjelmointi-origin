document.getElementById('maaButton').addEventListener('click', function() {
    let maasaanto = /^[a-zA-Z]{3}$/ig;
    let maakoodi = document.getElementById('maaInput').value;
    if (maasaanto.test(maakoodi)) {
      document.getElementById('t1').innerHTML = 'Maakodi kelpaa';
    } else {
      document.getElementById('t1').innerHTML = 'Maakoodi ei kelpaa';
    }
});
document.getElementById('nimiButton').addEventListener('click', function() {
    let nimisaanto = /^[A-Z][a-z]*(-[A-Z][a-z]*)*$/;
    let nimi = document.getElementById('nimiInput').value;
    if (nimisaanto.test(nimi)) {
      document.getElementById('t2').innerHTML = 'nimi kelpaa';
    } else {
      document.getElementById('t2').innerHTML = 'nimi ei kelpaa';
    }
});
document.getElementById('tekstiArea').addEventListener('blur', function(){
  let kirosaanto = /helkkari|helkutti|helskutti|helvetti|hiisi|hiivatti|hitto|jeeveli|jukolauta|jukoliste|jukra|jukranpujut|juku|jumalauta|juukeli|juutas|jösses|kehno|kehveli|kirottu|lempo|pannahinen|paska|peeveli|peijakas|pentele|perhana|perkele|perkule|permanto|perse|pirskatti|piru|pirulauta|raato|riivattu|ryökäle|saakeli|saakuri|saamari|saasta|saatana|samperi|turkanen|vitjat|vittu/gi;
  let teksti = document.getElementById('tekstiArea').value;
  document.getElementById('tekstiArea').value = teksti.replace(kirosaanto,'***');
});