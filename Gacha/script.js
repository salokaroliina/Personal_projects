// USE THE MACHINE
function gacha() {
  // DIFFERENT BALL-OPTIONS (24)
  const colors =
  ['Images/Balls/01.png','Images/Balls/02.png','Images/Balls/03.png','Images/Balls/04.png','Images/Balls/05.png','Images/Balls/06.png',
  'Images/Balls/07.png','Images/Balls/08.png','Images/Balls/09.png','Images/Balls/10.png','Images/Balls/11.png','Images/Balls/12.png',
  'Images/Balls/13.png','Images/Balls/14.png','Images/Balls/15.png','Images/Balls/16.png','Images/Balls/17.png','Images/Balls/18.png',
  'Images/Balls/19.png','Images/Balls/20.png','Images/Balls/21.png','Images/Balls/22.png',
  'Images/Balls/22.png','Images/Balls/23.png','Images/Balls/24.png'];

  // the original clickable handle that starts the function
  const handle = document.getElementById('handle');
  // new handle that gets replaced with the gif
  const handleReplace = document.getElementById('handleReplace');
    // original handle style goes 'none'
    handle.style.display = 'none';
    // replacing the unclickable image with gif instead of the original handle
    // prevents the handle being spammed
    handleReplace.src = 'Images/handle_anim.gif'; // <---- DO SOMETHING ABOUT THIS

      // TIMEOUT AFTER TURNING THE HANDLE
      const time = setTimeout(ball, 1450);
      function ball() {
        // The img on top (empty hatch) disappears
        document.getElementById('noball').style.display = 'none';
        // turnable handle disappears so the machine can't be spammed
        // Gives random ball from the 'colors' array
        let x = Math.floor(Math.random() * colors.length);
          // noball-img gets replaced with the random image
          document.getElementById('hatch').src = colors[x];
      }
}

// OPEN THE MODAL
function openModal() {
  // clicking the ball opens a new modal
  const modal = document.getElementById('myModal');
    // the hatch looks empty again
    document.getElementById('hatch').src = "Images/noball.png";

    // RANDOM NOTE
    const notes = [1,2,3,4];
    let ranNote = Math.floor(Math.random() * notes.length);

    // manipulating CSS with JS by changing the #note's bg img
    switch (ranNote) {
      case 1:
      document.getElementById('note').style.backgroundImage = "url('Images/Notes/note_01.png')";
        break;
      case 2:
      document.getElementById('note').style.backgroundImage = "url('Images/Notes/note_02.png')";
        break;
      case 3:
      document.getElementById('note').style.backgroundImage = "url('Images/Notes/note_03.png')";
        break;
      default:
      document.getElementById('note').style.backgroundImage = "url('Images/Notes/note_04.png')";
    }

    // RANDOM TEXT APPEARS ON THE MODAL
    const text = ['Everything will be alright','You are loved','Go by your own pace','Everyone is unique, including you','You are not a burden to anyone',
    'All of your emotions are valid','It is okay to say you are not strong enough','It is okay to ask for help when you need it',
    'You are perfect the way you are','It is never too late to try new things','Your past does not define you','You deserve peace in your life'];
    let random = Math.floor(Math.random() * text.length);
      // modal is displayed as a block
      modal.style.display = 'block';
      document.getElementById('modalText').innerHTML = text[random];
}

// CLOSE THE MODAL
function closeModal() {
  const modal = document.getElementById('myModal');
  const close = document.getElementsByClassName('close');
    // Modal display goes 'none'
    modal.style.display = 'none';
    document.getElementById('handle').src = 'Images/handle_01.png';
    // Makes the hatch look empty and makes it non-clickable
    document.getElementById('noball').style.display = 'block';
    // handle turns back to normal
    handle.style.display = 'block';
}

// CLOSE THE MODAL, VERSION 2
window.onclick = function(event) {
  const modal = document.getElementById('myModal');
    // Modal display goes 'none' when the modal-area is clicked
    if (event.target == modal) {
      modal.style.display = "none";
      document.getElementById('handle').src = 'Images/handle_01.png';
      // Makes the hatch look empty and makes it non-clickable
      document.getElementById('noball').style.display = 'block';
      // handle turns back to normal
      handle.style.display = 'block';
    }
}


function creditModal() {
  const credits = document.getElementById('credModal');
  document.getElementById('credits').style.backgroundImage = "url('Images/Notes/note_01.png')";
  credits.style.display = 'block';
}

function closeCredits(){
  const credits = document.getElementById('credModal');
  credits.style.display = 'none';
}
