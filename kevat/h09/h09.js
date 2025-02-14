const napsautus = document.querySelector('.napsautus');
const siirto = document.querySelector('.siirto');
const aika = document.querySelector('.aikaNappi');
const a = document.querySelector('.a');

aika.addEventListener('click', function(){
    a.innerHTML = Date();
});
napsautus.addEventListener('click', function(){
    napsautus.innerHTML = 'kiitos';
});
siirto.addEventListener('mouseover', function(){
    siirto.innerHTML = 'kiitos';
});
siirto.addEventListener('mouseout', function(){
    siirto.innerHTML = 'siirrä kursori tänne';
});
