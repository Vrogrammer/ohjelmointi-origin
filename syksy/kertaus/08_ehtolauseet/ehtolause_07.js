/*Luo Magic 8-Ball -ohjelma, joka matkii klassista kohtalon ennustamisen lelua. 
Käyttäjä syöttää kyllä-tai-ei -kysymyksen, ja ohjelma antaa satunnaisen vastauksen 8-pallosta. 
Toteuta ohjelma käyttämällä ehtolauseita valitsemaan ja näyttämään yksi useista ennalta määritellyistä vastauksista. */
function ballsAnswer(question) {
  if (!!question.trim()) {
    affirmative = ["Jep!", "Juu", "Ihan varmasti!"];
    neutral = ["En oo varma tästä", "Joo kai?", "Ehkä"];
    negative = ["Älä ees haaveile", "Ei missään nimessä", "Ei, sori vaan"];
    answerTypes = [affirmative, neutral, negative];
    function chooseRandomIndex(list) {
      return Math.floor(Math.random() * list.length);
    }
    randomType = answerTypes[chooseRandomIndex(answerTypes)];
    randomAnswer = randomType[chooseRandomIndex(randomType)];
    return randomAnswer;
  } else {
    return "Kysy jotain!";
  }
}
function ask() {
  question = prompt("Kysy jotain 8-pallolta");
  document.getElementById("answer").innerHTML = ballsAnswer(question);
}
document.getElementById("ask").addEventListener("click", ask);
