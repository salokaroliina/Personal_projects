function dice() {

  
  let number = Math.floor(Math.random()*6+1);


  switch (number) {
    case 1:
      document.getElementById('dice').src="dice/die_1.png";
      break;
    case 2:
      document.getElementById('dice').src="dice/die_2.png";
      break;
    case 3:
      document.getElementById('dice').src="dice/die_3.png";
      break;
    case 4:
      document.getElementById('dice').src="dice/die_4.png";
      break;
    case 5:
      document.getElementById('dice').src="dice/die_5.png";
      break;
    default:
      document.getElementById('dice').src="dice/die_6.png";
      break;
  }
  document.getElementById('result').innerHTML = number;
}
