function tarkistaValine(e) {
    e.preventDefault();
    document.getElementById('veneMenu').style.display = 'none';
    document.getElementById('autoMenu').style.display = 'none';
    tyyppi = document.querySelector('#valineMenu option:checked').value;
    auto = document.querySelector('#autoMenu option:checked').value;
    vene = document.querySelector('#veneMenu option:checked').value;
    if (tyyppi == 'autot') {
      document.getElementById('autoMenu').style.display = 'inline-block';
      document.getElementById('valittuvaline').innerHTML = document.querySelector('#autoMenu option:checked').innerHTML;
    } else if (tyyppi == 'veneet'){
      document.getElementById('veneMenu').style.display = 'inline-block';
      document.getElementById('valittuvaline').innerHTML = document.querySelector('#veneMenu option:checked').innerHTML;
    } else {
      document.getElementById('valittuvaline').innerHTML = '';
    }
  }
  function tarkistaTilaus(e) {
    e.preventDefault();
    let ruokavalinnat = document.querySelectorAll('input[name=ruoka]:checked');
    let valinnat = '';
    for (let valinta of ruokavalinnat) {
      valinnat += valinta.value + '<br>';
    }
    document.getElementById('ruokavalinnat').innerHTML = valinnat;
  }
  function tarkistaSalasana(e) {
    e.preventDefault();
    if (document.getElementById('salasanaTextInput').value.length < 10) {
      document.getElementById('salasanaTextInput').style.backgroundColor = 'rgb(255, 192, 203)';
    } else{
      document.getElementById('salasanaTextInput').style.backgroundColor = 'rgb(144, 238, 144)';
    }
  }
  function tarkistaIso(e) {
    e.preventDefault();
    teksti = document.getElementById('isoTextInput').value;
    document.getElementById('isoTextInput').value = teksti.toUpperCase();
  }
  function tarkistaNimi(e){
    e.preventDefault();
      nimi = document.getElementById('nimiTextInput').value;
      if (nimi != '') {
        alert(`Hei, ${nimi}`);
      } else {
        alert('Kuka olet?');
      }
  }
  document.getElementById('tervehdiButton').addEventListener('click', tarkistaNimi);
  document.getElementById('isoTextInput').addEventListener('blur', tarkistaIso);
  document.getElementById('salasanaTextInput').addEventListener('input',tarkistaSalasana);
  document.getElementById('tilaaButton').addEventListener('click',tarkistaTilaus);
  document.querySelectorAll('.menu').forEach(function(menu) {menu.addEventListener('change', tarkistaValine)});