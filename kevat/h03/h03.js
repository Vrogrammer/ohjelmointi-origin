luku1 = parseInt(prompt('luku1'));
luku2 = parseInt(prompt('luku2'));

document.getElementById('nelilaskin').innerHTML = `
${luku1} + ${luku2} = ${luku1 + luku2}<br>
${luku1} - ${luku2} = ${luku1 - luku2}<br>
${luku1} * ${luku2} = ${luku1 * luku2}<br>
${luku1} / ${luku2} = ${luku1 / luku2}<br>`;

function kasvata() {
    document.getElementById('luku').innerHTML++;
}
function pienenna() {
    document.getElementById('luku').innerHTML--;
}