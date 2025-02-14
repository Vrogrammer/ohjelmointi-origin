function peliAlkaa(){
    document.querySelectorAll('.kortti').forEach(function(card){
        card.style.fontSize = '80px';
});
    document.getElementById('yrityksetMaara').innerHTML = 'Löydä kortti! Yrityksiä: 8';
    korttitaulukko = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'];
    yritykset = 8;
    sekoita(korttitaulukko);
    document.querySelectorAll('.kortti').forEach(function(kortti) {
        kortti.removeEventListener('click', peliAlkaa);
        kortti.addEventListener('click', kaannaKortti);
        kortti.innerHTML = '';
        kortti.style.backgroundColor = 'black';
    });
}

function sekoita(taulukko) {
    taulukko.forEach(function(alkio, indeksi){
        taulukko[indeksi] = 'x';
    });
    return taulukko[Math.floor(Math.random()*taulukko.length)] = '♡';
}

function kaannaKortti(tapahtuma) {
    if (document.getElementById('yrityksetMaara').innerHTML == 'Voitit!'){
        peliAlkaa();
    }
    document.getElementById('yrityksetMaara').innerHTML = 'Löydä kortti! Yrityksiä: '+yritykset;
    let kortti = tapahtuma.target;
    let indeksi = kortti.getAttribute('data-id')-1;
    kortti.style.backgroundColor = 'red';
    if (korttitaulukko[indeksi] === '♡') {
        kortti.style.backgroundColor = 'green';
        document.getElementById('yrityksetMaara').innerHTML = 'Löysit! Paina sitä';
        document.querySelectorAll('.kortti').forEach(function(korttii) {
            korttii.removeEventListener('click', kaannaKortti);
        });
        kortti.addEventListener('click',peliAlkaa);
        
    } else {
        
        if (yritykset == 1) {
            let winningIndex = korttitaulukko.indexOf('♡');
            let winningCard = document.querySelector(`[data-id="${winningIndex + 1}"]`);
            if (winningCard) {
                winningCard.style.backgroundColor = 'green';
            }
            document.getElementById('yrityksetMaara').innerHTML = 'Hävisit :(';
            document.querySelectorAll('.kortti').forEach(function(korttii) {
                korttii.style.fontSize = '30px';
                korttii.addEventListener('click',peliAlkaa);
            });
        } else {
        yritykset--;    
        document.getElementById('yrityksetMaara').innerHTML = 'Löydä kortti! Yrityksiä: '+yritykset;
        kortti.removeEventListener('click',kaannaKortti);
        }
    }
}
peliAlkaa();
