// variables that hold all content for the page
const genre = ["Fantasia", "Toiminta", "Romantiikka","Seikkailu", "Erotiikka", "Jännitys", "Kauhu", "Draama", "Mysteeri", "Komedia","Historia", "Sci-fi", "Rikos"];
const fantasy = ["Nimi1", "Nimi2", "Nimi3"];
const realF = ["Niina", "Elina", "Jenni", "Jenna"];
const realM = ["M1", "M2", "M3"];
const realO = ["Kuura", "Aalto"];
// function that's linked to the button
function generate() {
  // list-variable that takes value from the dropdown-list
  const list = document.getElementById('dropdown');
  // variable that takes value from list-variable
  let select = list.options[list.selectedIndex].value;

// Switch case to check which option is selected
// When option is selected, the program gives a random option from the selected variable
// The random option is written in DOM
  switch (select) {
    case 'genre':
      let a = Math.floor(Math.random()*genre.length);
      document.getElementById('output').innerHTML = (genre[a]);
      break;
    case 'fantasy':
      let b = Math.floor(Math.random()*fantasy.length);
      document.getElementById('output').innerHTML = (fantasy[b]);
      break;
    case 'realF':
      let c = Math.floor(Math.random()*realF.length);
      document.getElementById('output').innerHTML = (realF[c]);
      break;
    case 'realM':
      let d = Math.floor(Math.random()*realM.length);
      document.getElementById('output').innerHTML = (realM[d]);
      break;
    default:
      let e = Math.floor(Math.random()*realO.length);
      document.getElementById('output').innerHTML = (realO[e]);
      break;
    }

    // Two separate switch-cases just to keep the code clean and simple for me to understand
    // This is a continuation to the previous switch-case
    // This switch case checks the selected option and writes it into a DOM as a list-element
      switch (select) {
        case 'genre':
          let previousFirst = document.createElement("li");
          text = document.getElementById('output');
          previousFirst.innerHTML = text.innerHTML;
          previousElement = document.getElementById("previousFirst");
          previousElement.appendChild(previousFirst);
          break;
        case 'fantasy':
          let previousSecond = document.createElement("li");
          text = document.getElementById('output');
          previousSecond.innerHTML = text.innerHTML;
          previousElement = document.getElementById("previousSecond");
          previousElement.appendChild(previousSecond);
          break;
        case 'realF':
          let previousThird = document.createElement("li");
          text = document.getElementById('output');
          previousThird.innerHTML = text.innerHTML;
          previousElement = document.getElementById("previousThird");
          previousElement.appendChild(previousThird);
          break;
        case 'realM':
          let previousFourth = document.createElement("li");
          text = document.getElementById('output');
          previousFourth.innerHTML = text.innerHTML;
          previousElement = document.getElementById("previousFourth");
          previousElement.appendChild(previousFourth);
          break;
        default:
          let previousFifth = document.createElement("li");
          text = document.getElementById('output');
          previousFifth.innerHTML = text.innerHTML;
          previousElement = document.getElementById("previousFifth");
          previousElement.appendChild(previousFifth);
          break;
  }
}
