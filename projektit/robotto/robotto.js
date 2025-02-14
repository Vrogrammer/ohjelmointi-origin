walk = [
    'images/walk1.png',
    'images/walk2.png'
];
jump = [
    'images/jump1.png',
    'images/jump2.png',
    'images/jump3.png',
    'images/jump3.png',
    'images/jump2.png',
    'images/jump1.png'
];
wave = [
    'images/wave1.png',
    'images/wave2.png',
    'images/wave3.png',
    'images/wave4.png',
    'images/wave5.png',
    'images/wave4.png',
    'images/wave3.png',
    'images/wave2.png',
];
animating = 0;

function lopeta() {
    clearInterval(animating);
    document.getElementById('image').setAttribute('src', 'images/stand.png')
}

function input() {
    i = 0;
    if (document.getElementById('input').value == 'robotto.walk();') {
        clearInterval(animating);
        animating = setInterval(animate, 200, walk);
    } else if (document.getElementById('input').value == 'robotto.jump();') {
        clearInterval(animating);
        animating = setInterval(animate, 100, jump);
    } else if (document.getElementById('input').value == 'robotto.wave();') {
        clearInterval(animating);
        animating = setInterval(animate, 100, wave);
    } else {
        list = undefined;
        alert('Syntax Error!')
    }
}

function animate(srclist) {
    document.getElementById('image').setAttribute('src', srclist[i]);
    i++;
    if (i >= srclist.length) {
        i = 0;
    }
}

document.getElementById('lopeta').addEventListener('click', lopeta);
document.getElementById('suorita').addEventListener('click', input);