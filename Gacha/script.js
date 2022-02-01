// DIFFERENT BALL-OPTIONS
const colors =
['Images/Pink/Balls/01.png','Images/Pink/Balls/02.png','Images/Pink/Balls/03.png','Images/Pink/Balls/04.png','Images/Pink/Balls/05.png','Images/Pink/Balls/06.png',
'Images/Pink/Balls/07.png','Images/Pink/Balls/08.png','Images/Pink/Balls/09.png','Images/Pink/Balls/10.png','Images/Pink/Balls/11.png','Images/Pink/Balls/12.png',
'Images/Pink/Balls/13.png','Images/Pink/Balls/14.png','Images/Pink/Balls/15.png','Images/Pink/Balls/16.png','Images/Pink/Balls/17.png','Images/Pink/Balls/18.png',
'Images/Pink/Balls/19.png','Images/Pink/Balls/20.png','Images/Pink/Balls/21.png','Images/Pink/Balls/22.png','Images/Pink/Balls/23.png','Images/Pink/Balls/24.png'];

// USE THE MACHINE
function gacha() {
  const handle = document.getElementById('handle');
    // The handle-img gets replaced with a gif when clicked, making it look like it's turning
    handle.src = 'Images/Pink/handle/handle_anim.gif'; // <---- CHECK THE PATH LATER

      // TIMEOUT AFTER TURNING THE HANDLE
      const time = setTimeout(ball, 1100);
      function ball() {
        // The img on top (empty hatch) disappears
        document.getElementById('noball').style.display = 'none';
        // turnable handle disappears so the machine can't be spammed
        handle.style.display = 'none';
        // Gives random ball from the 'colors' array
        let x = Math.floor(Math.random() * colors.length);
          // noball-img gets replaced with the random image
          document.getElementById('hatch').src = colors[x];
      }
}

// OPEN THE MODAL
function openModal() {
  // clicking the ball opens a new modal
  const ball = document.getElementById('openModal');
  const modal = document.getElementById('myModal');
    // the hatch looks empty again
    document.getElementById('hatch').src = "Images/Pink/Balls/noball.png"; // <---- CHECK THE PATH LATER

    // RANDOM TEXT APPEARS ON THE MODAL
    const text = ['Hello world', 'Hello fucker', 'Yeet yeet'];
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
    document.getElementById('handle').src = 'Images/Pink/handle/handle_01.png'; // <---- CHECK THE PATH LATER
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
      document.getElementById('handle').src = 'Images/Pink/handle/handle_01.png'; // <---- CHECK THE PATH LATER
      // Makes the hatch look empty and makes it non-clickable
      document.getElementById('noball').style.display = 'block';
      // handle turns back to normal
      handle.style.display = 'block';
    }
}
