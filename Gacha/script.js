let index = 0;
// USE THE MACHINE
function gacha() {
  // set of images the program goes through
  const images = [];
  images[0] = ['Images/handle_01.png'];
  images[1] = ['Images/handle_02.png'];
  images[2] = ['Images/handle_03.png'];
  images[3] = ['Images/handle_04.png'];
  images[4] = ['Images/handle_01.png'];

  // the original clickable handle that starts the function
  const handle = document.getElementById('handle');
  // handleReplace can't be clicked, unlike the original handle
  const handleReplace = document.getElementById('handleReplace');
    // original handle style goes 'none'
    handle.style.display = 'none';
    // handleReplace goes through the images-array, starting from 0
    handleReplace.src = images[index];
      // the program goes through all images one by one until it reaches image[0] again
      if (index == 4) {
        index = 0;
      } else {
        index++;
      }
      // setTimeout gives time to go through every image (0.3s)
      const myTimeout = setTimeout(gacha, 300);
      // when the index goes back to 0, the timeOut clears out and the program stops going through the images
      // at the same time a new timeOut starts, giving the time (0.5s) before the second function excecutes
      if (index == 0) {
          clearTimeout(myTimeout);
          const newTimeout = setTimeout(ball,500)
      }

    function ball() {

      const colors =
      ['Images/Balls/01.png','Images/Balls/02.png','Images/Balls/03.png','Images/Balls/04.png','Images/Balls/05.png','Images/Balls/06.png',
          'Images/Balls/07.png','Images/Balls/08.png','Images/Balls/09.png','Images/Balls/10.png','Images/Balls/11.png','Images/Balls/12.png',
          'Images/Balls/13.png','Images/Balls/14.png','Images/Balls/15.png','Images/Balls/16.png','Images/Balls/17.png','Images/Balls/18.png',
          'Images/Balls/19.png','Images/Balls/20.png','Images/Balls/21.png','Images/Balls/22.png',
          'Images/Balls/22.png','Images/Balls/23.png','Images/Balls/24.png'];
      // The img on top (empty hatch) disappears
      document.getElementById('noball').style.display = 'none';

      // Gives random ball from the 'colors' array
      let x = Math.floor(Math.random() * colors.length);
      // noball-img gets replaced with a random image
      document.getElementById('hatch').src = colors[x];
  }
  // clearing the timeOut just in case
  clearTimeout(newTimeout);
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
  document.getElementById('credits').style.backgroundImage = "url('Images/creditsNote.png')";
  credits.style.display = 'block';
}

function closeCredits(){
  const credits = document.getElementById('credModal');
  credits.style.display = 'none';
}
