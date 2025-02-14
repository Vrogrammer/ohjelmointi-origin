let sukupuoli 

function fieldFilled(field) {
    return field.value == '';
}
function fieldsFilled(fields) {
    for (let field of fields) {
        return onkoKenttaTaytetty(field);
    }
}
function rightLength(password) {
    return password.length >= 8;
}
function passwordsMatch(pass1, pass2) {
    return pass1 == pass2;
}
function gender() {
    sukupuoli = document.querySelector('input[name = sukupuoli]:checked').value;
    if (document.querySelector('input[name = sukupuoli]:checked').value == 'muu') {
        document.getElementById('sukupuoli-mika').style.display = 'inline-block';
        document.getElementById('sukupuoli-mika').addEventListener('input', function() {
            sukupuoli = document.getElementById('sukupuoli-mika').value;
        });
    } else {
        document.getElementById('sukupuoli-mika').style.display = 'none';
    }
}
function submit(e) {
    e.preventDefault();
    emailrule = /^\w+([.-]\w+)*@(\w+[.])*[a-z]{2,3}$/i;
    nimi = document.getElementById('nimi').value;
    sahkoposti = document.getElementById('sposti').value;
    salasana = document.getElementById('salasana').value;
    salasana2 = document.getElementById('salasana2').value;
    if (nimi != '' && emailrule.test(document.getElementById('sposti').value) && rightLength(salasana) && passwordsMatch(salasana, salasana2) && sukupuoli != null) {
        alert(`Nimi: ${nimi}, sähköposti: ${sahkoposti}, salasana: ${salasana}, sukupuoli: ${sukupuoli}`);
    } else {
        if (nimi == '') {
            document.getElementById('virhe-nimi').innerHTML = 'Anna nimi';
        } else {
            document.getElementById('virhe-nimi').innerHTML = '';
        }
        if (emailrule.test(document.getElementById('sposti').value)) {
            document.getElementById('virhe-sposti').innerHTML = '';
        } else {
            document.getElementById('virhe-sposti').innerHTML = 'Sähköposti ei kelpaa';
        }
        if (!rightLength(salasana)) {
            document.getElementById('virhe-salasana').innerHTML = 'Salasana on liian lyhyt';
        } else {
            document.getElementById('virhe-salasana').innerHTML = '';
        }
        if (!passwordsMatch(salasana, salasana2)) {
            document.getElementById('virhe-salasana2').innerHTML = 'Salasanat eivät täsmää';
        } else {
            document.getElementById('virhe-salasana2').innerHTML = '';
        }
        if (sukupuoli == null){
            document.getElementById('virhe-sukupuoli').innerHTML = 'valitse sukupuoli';
        } else {
            document.getElementById('virhe-sukupuoli').innerHTML = '';
        }
    }
}

document.querySelectorAll('input[name = sukupuoli]').forEach((button) => {
    button.addEventListener('change', gender)
});
document.getElementById('rekisteroidy').addEventListener('click', submit);