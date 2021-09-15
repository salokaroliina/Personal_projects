// variables that hold all content for the page
var genre = ["Fantasia", "Toiminta", "Romantiikka","Seikkailu", "Erotiikka", "Jännitys", "Kauhu", "Draama", "Mysteeri", "Komedia","Historia", "Sci-fi", "Rikos"];
var fantasy = ["Nimi1", "Nimi2", "Nimi3"];
var realF = ["Niina", "Elina", "Jenni", "Jenna"];
var realM = ["M1", "M2", "M3"];
var realO = ["Kuura"];
// function that's linked to the button
function generate() {
  // list-variable that takes value from the dropdown-list
  var list = document.getElementById('dropdown');
  // variable that takes value from list-variable
  var select = list.options[list.selectedIndex].value;

  // if the user has selected 'genre' from the dropdown-list
  // the program takes one random name from the 'genre' list
  // and posts it on the output-area
  if (select == "genre")
  {
    var x = Math.floor(Math.random()*genre.length);
    document.getElementById('output').innerHTML = (genre[x]);
    // variable 'previous' creates a new element 'list-item'
    var previous = document.createElement("li");
    // variable 'text' takes the content of the 'output'
    var text = document.getElementById('output');
    // the variable 'previous' is given the value of 'text'
    previous.innerHTML = text.innerHTML;
    // variable 'previousElement' takes value from HTML-id 'previous'
    var previousElement = document.getElementById("previous");
    // appendChild creates a new element from the 'previous'-variable and posts it on the DOM
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
