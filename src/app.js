/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const who = ["The dog", "My grandma", "The mailman", "My bird"];
  const action = ["ate", "peed", "crushed", "broke"];
  const what = ["my homework", "my phone", "the car"];
  const when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const randomWho = Aleatorias(who);
  const randomAction = Aleatorias(action);
  const randomWhat = Aleatorias(what);
  const randomWhen = Aleatorias(when);

  const randomSentence = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;

  const resultado = document.getElementById("texto");
  resultado.innerHTML = randomSentence;
};

function Aleatorias(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
console.log(Aleatorias);
