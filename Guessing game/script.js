// a random number between 1 & 10
let randomNum = Math.floor(Math.random()*10 + 1);
let times = 0;

  function play() {
      // button is in use until it's disabled
      const button = document.getElementById('playBtn');
      button.disabled = false;
      const againBtn = document.getElementById('againBtn');
      againBtn.disabled = true;
      // playerNum is the number the player has given
      let playerNum = document.getElementById('number').value;
      console.log(randomNum);
      // timesTried counts every try
      document.getElementById('timesTried').innerHTML = times + 1;
      // when times = 3, the game ends
      times++;

        // for loop counts to 3
        // when i = 2 (3 turns), the game ends if the player hasn't guesses the right number before
        for (let i = 0; i < times; i++) {
            if (randomNum > playerNum ) {
              document.getElementById('answer').innerHTML = "Too small";
            } else if (randomNum < playerNum) {
              document.getElementById('answer').innerHTML = "Too big";
            } else {
              document.getElementById('answer').innerHTML = "You won!";
              // if the player wins, the play-button gets disabled and replay button abled
              button.disabled = true;
              againBtn.disabled = false;
          }
        if (i == 2) {
          if (randomNum == playerNum) {
            document.getElementById('answer').innerHTML = "You won!";
          }
          else {
            document.getElementById('answer').innerHTML = "You lost! The number was " + randomNum;
          }
          // when the game ends, the play-button gets disabled and replay button abled
          button.disabled = true
          againBtn.disabled = false;
        }
      }
    }
  // the replay-button reloads the page to start the game again
  function again(){
    location.reload();
  }
