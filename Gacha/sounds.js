
function playAudio() {
  document.getElementById('sound').play();
  document.getElementById('sound').volume = 0.05;
  document.getElementById('sound').muted = false;

  document.getElementById("soundOn").style.fontStyle = "italic";
  document.getElementById("soundOn").style.textDecoration = "underline";
  document.getElementById("soundOff").style = "none";
}

function muteAudio(){
  document.getElementById('sound').muted = true;

  document.getElementById("soundOn").style = "none";
  document.getElementById("soundOff").style.textDecoration = "underline";
  document.getElementById("soundOff").style.fontStyle = "italic";
}
