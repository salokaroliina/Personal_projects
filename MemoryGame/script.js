// a memory game done by following Ania Kubów's tutorial
// loading the page starts the function
document.addEventListener('DOMContentLoaded', () => {

  // cards as objects in an array
  const cardArray = [
    {name: 'A', img: 'cards/01.png'},
    {name: 'A', img: 'cards/01.png'},
    {name: 'B', img: 'cards/02.png'},
    {name: 'B', img: 'cards/02.png'},
    {name: 'C', img: 'cards/03.png'},
    {name: 'C', img: 'cards/03.png'},
    {name: 'D', img: 'cards/04.png'},
    {name: 'D', img: 'cards/04.png'},
    {name: 'E', img: 'cards/05.png'},
    {name: 'E', img: 'cards/05.png'},
    {name: 'F', img: 'cards/06.png'},
    {name: 'F', img: 'cards/06.png'},
    {name: 'G', img: 'cards/07.png'},
    {name: 'G', img: 'cards/07.png'},
    {name: 'H', img: 'cards/08.png'},
    {name: 'H', img: 'cards/08.png'}
  ];

  // cards are sorted randomly
  cardArray.sort(() => 0.5 - Math.random());

  // .grid is the game area in DOM
  const grid = document.querySelector('.grid');
  // resultDisplay is area in DOM where the game result is shown
  const resultDisplay = document.querySelector('#result');
  // cardsChosen is an empty array
  let cardsChosen = [];
  // cards will be given id:s later, so cardsChosenId will be an empty array too
  let cardsChosenId = [];
  // cardsWon are the cards that matched. It has an empty array too
  let cardsWon = [];


  // creating a board
  function board() {
    // for-loop to go through the cardArray
    for (let i = 0; i < cardArray.length; i++) {
      // creating a card on the board as an image
      let card = document.createElement('img');
      // card is given attritbutes; src and the location in the folder
      // bg.png is the back of the card which shows on the board before it's flipped
      card.setAttribute('src','cards/bg.png');
      // card is given a data-id
      card.setAttribute('data-id', i);
      // when the card is clicked, flipCard function starts
      card.addEventListener('click', flipCard);
      // grid on the DOM is the area for the cards to appear
      grid.appendChild(card);
    }
  }

  // check for matches
  function checkForMatch() {
    // selecting all the images (cards) on DOM
    let cards = document.querySelectorAll('img');
    // optionOneId is the first card turned
    // array cardsChosenId is 0 and it's compared to the second chosen card
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    // if the id:s match, the program alerts and tells the player they found a match
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match');
      // if the match is found, the turned cards get new attritbutes, src and a new image
      cards[optionOneId].setAttribute('src', 'cards/black.png');
      cards[optionTwoId].setAttribute('src', 'cards/black.png');
      // cardsChosen is pushed into cardsWon-array
      cardsWon.push(cardsChosen);
    } else {
      // if the cards turned aren't a match, the turned cards will return to show the back of the card
      cards[optionOneId].setAttribute('src', 'cards/bg.png');
      cards[optionTwoId].setAttribute('src', 'cards/bg.png');
      // the program alerts the player
      alert('Sorry, try again');
    }
    cardsChosen = [];
    cardsChosenId = [];
    // resultDisplay on DOM gets a textContent, which is the length of the cards won
    resultDisplay.textContent = cardsWon.length;
    // if the amount of cards won is half of the cardArray's length, the resultDisplay displays tells the player won
    // half of the won cards is the amount of pairs
    if (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!';
    }
  }

  // flip the card
  function flipCard() {
    // every card gets attribute data-id
    let cardId = this.getAttribute('data-id');
    // card in cardArray is pushed into cardsChosen-array
    // the card pushed has an id, and once the id is found the card has a name too (from A to H)
    // this way the cards can be matched to each other
    cardsChosen.push(cardArray[cardId].name);
    // the id of the flipped card is pushed to cardsChosenId-array
    cardsChosenId.push(cardId);
    // an image will be given to the card based on its id
    this.setAttribute('src',cardArray[cardId].img);
    // if two cards has been flipped, checkForMatch-function excecutes again after set amount of time
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  // calling the function board to start the game
  board();

})
