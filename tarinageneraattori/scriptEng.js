var genre = ["Fantasy", "Action", "Romance","Adventure", "Erotic", "Thriller", "Horror", "Drama", "Mystery", "Comedy","History", "Sci-fi", "Crime"];
var fantasy = ["Nimi1", "Nimi2", "Nimi3"];
var realF = ["Niina", "Elina", "Jenni", "Jenna"];
var realM = ["M1", "M2", "M3"];
var realO = ["Kuura"];

function generate() {

  var list = document.getElementById('dropdown');
  var select = list.options[list.selectedIndex].value;

  if (select == "genre")
  {
    var x = Math.floor(Math.random()*genre.length);
    document.getElementById('output').innerHTML = (genre[x]);

    var previous = document.createElement("li");
    var text = document.getElementById('output');
    previous.innerHTML = text.innerHTML;
    var previousElement = document.getElementById("previous");
    previousElement.appendChild(previous);
  }
  else if (select == "fantasy") {
    x = Math.floor(Math.random()*fantasy.length);
    document.getElementById('output').innerHTML = (fantasy[x]);

    var previousSecond = document.createElement("li");
    text = document.getElementById('output');
    previousSecond.innerHTML = text.innerHTML;
    previousElement = document.getElementById("previousSecond");
    previousElement.appendChild(previousSecond);
  }
  else if (select == "realF") {
    x = Math.floor(Math.random()*realF.length);
    document.getElementById('output').innerHTML = (realF[x]);

    var previousThird = document.createElement("li");
    text = document.getElementById('output');
    previousThird.innerHTML = text.innerHTML;
    previousElement = document.getElementById("previousThird");
    previousElement.appendChild(previousThird);
  }
  else if (select == "realM") {
    x = Math.floor(Math.random()*realM.length);
    document.getElementById('output').innerHTML = (realM[x]);

    var previousFourth = document.createElement("li");
    text = document.getElementById('output');
    previousFourth.innerHTML = text.innerHTML;
    previousElement = document.getElementById("previousFourth");
    previousElement.appendChild(previousFourth);
  }
  else {
    x = Math.floor(Math.random()*realO.length);
    document.getElementById('output').innerHTML = (realO[x]);

    var previousFifth = document.createElement("li");
    text = document.getElementById('output');
    previousFifth.innerHTML = text.innerHTML;
    previousElement = document.getElementById("previousFifth");
    previousElement.appendChild(previousFifth);

  }
}
