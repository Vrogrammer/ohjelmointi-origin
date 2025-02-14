y = 0;
twoNumbers = /^[0-9]{1,2}$/;
fourNumbers = /^[0-9]{1,4}$/;
months = [31,28,31,30,31,30,31,31,30,31,30,31];

function displayResult(){
    document.getElementById('years').innerHTML = y;
    document.getElementById('months').innerHTML = m;
    document.getElementById('days').innerHTML = d;
}
function age() {
    d1 = document.getElementById('dayInput').value;
    m1 = document.getElementById('monthInput').value;
    y1 = document.getElementById('yearInput').value;
    
    today = new Date(); 
    d2 = today.getDate();
    m2 = 1 + today.getMonth();
    y2 = today.getFullYear();

    if (d1 > d2) {
        d2 = d2 + months[m2 -1];
        m2 = m2 - 1;
    }
    if (m1> m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    d = d2 -d1;
    m = m2 - m1;
    y = y2 - y1;

}
function countResult(){
    document.querySelector('button').removeEventListener('click',checkInputs);
    i = 1;
    document.getElementById('years').innerHTML = i;
    document.getElementById('months').innerHTML = 0;
    document.getElementById('days').innerHTML = 0;
    
    countyears = setInterval(countYears,500/y);
    countmonths = setInterval(countMonths,1000/m);
    countdays = setInterval(countDays,1000/d);
}
function countYears(){
    document.getElementById('years').innerHTML = i;
    if (i < y && (y - i) > 150) {
        i += 50;
    } else if (i < y) {
        i++;
    } else { 
        clearInterval(countyears);
        document.querySelector('button').addEventListener('click',checkInputs)
        displayResult();
    }
}
function countMonths(){
    if (document.getElementById('months').innerHTML < m) {
        document.getElementById('months').innerHTML++;
    } else { 
        clearInterval(countmonths);
    }
}
function countDays(){
    if (document.getElementById('days').innerHTML < d) {
        document.getElementById('days').innerHTML++;
    } else { 
        clearInterval(countdays);
    }
}
function limitDay() {
  day = document.getElementById('dayInput').value;
   if (!twoNumbers.test(day)) {
    document.getElementById('dayInput').value = day.slice(0,-1);
   }
}
function limitMonth(){
   if (!twoNumbers.test(document.getElementById('monthInput').value)) {
    document.getElementById('monthInput').value = document.getElementById('monthInput').value.slice(0,-1);
   }
}
function limitYear(){
  if (!fourNumbers.test(document.getElementById('yearInput').value)) {
    document.getElementById('yearInput').value = document.getElementById('yearInput').value.slice(0,-1);
  }
}
document.getElementById('dayInput').addEventListener('input',limitDay);
document.getElementById('monthInput').addEventListener('input',limitMonth);
document.getElementById('yearInput').addEventListener('input',limitYear);

function displayError(){
  document.getElementById('top').style.color = 'hsl(0, 100%, 67%)';
  document.querySelectorAll('input').forEach((e)=>{e.style.borderColor = 'hsl(0, 100%, 67%)'});
}
function displayNoError(){
  document.getElementById('top').style.color = 'gray';
  document.querySelectorAll('input').forEach(function(e) {
    e.style = '';
  });
}
function checkInputs() {
  month = document.getElementById('monthInput').value;
  day = document.getElementById('dayInput').value;
  year = document.getElementById('yearInput').value;
  if (day == '') {
    document.querySelector('.dayError').innerHTML = 'day empty';
    dayok = false;
  } else if (day > 31 || day < 1) {
    document.querySelector('.dayError').innerHTML = 'day invalid';
    dayok = false;
  } else {
    document.querySelector('.dayError').innerHTML = '';
    dayok = true;
  }
  if (month == '') {
    document.querySelector('.monthError').innerHTML = 'month empty';
    monthok = false;
  } else if (month > 0 && month < 13) {
      if (day > months[month-1]) {
        document.querySelector('.dayError').innerHTML = 'invalid date';
        dayok = false;
      } else {
        document.querySelector('.monthError').innerHTML = '';
        monthok = true;
      }
  } else {
    document.querySelector('.monthError').innerHTML = 'month invalid';
    monthok = false;
  }
  if (year == '') {
    document.querySelector('.yearError').innerHTML = 'year empty';
    yearok = false;
  } else {
    document.querySelector('.yearError').innerHTML = '';
    yearok = true;
  }
  if (monthok && dayok && yearok) {
    displayNoError();
    age();
    if (y > -1) {
        countResult();  
    } else {
        displayError();
        document.querySelector('.yearError').innerHTML = "must be in the past";
    }
  } else {
    displayError();
  }
}
document.querySelector('button').addEventListener('click', checkInputs);