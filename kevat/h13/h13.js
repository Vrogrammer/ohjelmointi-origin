function vertaa() {
    let date = new Date();
    let tanaan = new Date(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
    let syote = new Date(document.getElementById('pmInput').value);
    ero = Math.abs(Math.floor((syote.getTime() - tanaan.getTime()) / (1000*3600*24)));
    if (ero == 0) {
        document.getElementById('t1').innerHTML = `Valitsemasi päivä on tänään`;
    } else if (tanaan.getTime() < syote.getTime()) {
        document.getElementById('t1').innerHTML = `Valitsemasi päivä on ${ero} päivän päästä`;
    } else if (tanaan.getTime() > syote.getTime()) {
        document.getElementById('t1').innerHTML = `Valitsemasi päivä oli ${ero} päivää sitten`;
    }  else {
        document.getElementById('t1').innerHTML = 'Valitse päivä';
    }
}
function updateTime() {
    aika = new Date();
    if (aika.getMinutes() > 9 ) {
        document.getElementById('kello').innerHTML = `${aika.getHours()}:${aika.getMinutes()}`;
    } else {
        document.getElementById('kello').innerHTML = `${aika.getHours()}:0${aika.getMinutes()}`;
    }   
}
updateTime();   
setInterval(updateTime, 1000);
document.getElementById('tarkistaButton').addEventListener('click', vertaa);