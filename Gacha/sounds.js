
function playAudio() {
  document.getElementById('sound').play();
  document.getElementById('sound').volume = 0.2;
  document.getElementById('sound').muted = false;
}

function muteAudio(){
  document.getElementById('sound').muted = true;
}
