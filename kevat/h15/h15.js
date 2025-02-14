//nuoili funktiot
tervehdi = (nimi) => {
    return 'Hei, ' + nimi + '!';
}
vaihdaTaustavari = (vari) => {
    document.documentElement.style.backgroundImage = 'none';
    document.documentElement.style.backgroundColor = vari;
}
fahrenheitCelsius = (fahr) => {
    return (5/9) * (fahr-32);
}
pieninTaulukosta = (lukutaulukko) => {
    return Math.min(...lukutaulukko);
}
valuuttaMuotoilija = (maara, symboli, prefiksi) => {
    if (prefiksi == 'true'){
        return symboli + maara;
    } else {
        return maara + symboli;
    }
}
//nappien klikkausfunktiot
tervehdiButton = () => {
    document.querySelector('.box1').innerHTML = tervehdi(nimi = prompt('Mikä on nimesi? '));
    document.querySelector('.box1').style.display = 'block';
}

vaihdaTaustavariButton = () => {
    vaihdaTaustavari(prompt('Anna uusi väri sivulle: '));
}
fahrenheitCelsiusButton = () => {
    document.querySelector('.box3').innerHTML = fahrenheitCelsius(parseInt(prompt('Kuinka monta F astetta C asteiksi: '))).toFixed(2)+'°C';
    document.querySelector('.box3').style.display = 'block';
}
pieninTaulukostaButton = () => {
    numbers = [];
    while (true){
        let number = parseInt(prompt("Anna lukuja taulukkoon, muu kuin luku lopettaa: "));
    if (isNaN(number)){
        break;
    } numbers.push(number);
    } console.log('annetut luvut: '+numbers);
    document.querySelector('.box4').innerHTML = 'pienin antamasi luku: ' + pieninTaulukosta(numbers);
    document.querySelector('.box4').style.display = 'block';
}
valuuttaMuotoilijaButton = () => {;
    document.querySelector('.box5').innerHTML = valuuttaMuotoilija(prompt('Anna määrä:'), prompt('Anna symboli:'), prompt('Onko prefiksi? true/false'));
    document.querySelector('.box5').style.display = 'block';
}
palauta = () => {
    document.documentElement.style.backgroundImage = 'url(../../etusivu/background.png)'
}
//funktion kutsut napeilla 

document.querySelector('.b1').addEventListener('click', tervehdiButton);
document.querySelector('.b2').addEventListener('click', vaihdaTaustavariButton);
document.querySelector('.b3').addEventListener('click', fahrenheitCelsiusButton);
document.querySelector('.b4').addEventListener('click', pieninTaulukostaButton);
document.querySelector('.b5').addEventListener('click', valuuttaMuotoilijaButton);
document.getElementById('palauta').addEventListener('click', palauta);