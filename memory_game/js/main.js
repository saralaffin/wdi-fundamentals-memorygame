var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}];

var cardsInPlay = [];
var scoreNum = 0;

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[2]) {
	  alert("You found a match!");
	  scoreNum += 1;
	  document.getElementById('scoreId').innerHTML = 'Score: ' + scoreNum;
	} else {
	  alert("Sorry, try again. Your second card was a " + cards[cardsInPlay[3]].rank);
	  document.getElementsByTagName('img')[cardsInPlay[1]].setAttribute('src', 'images/back.png');
	  document.getElementsByTagName('img')[cardsInPlay[3]].setAttribute('src', 'images/back.png');
	};
	 cardsInPlay = [];
};

function flipCard() {
	var cardId = this.getAttribute('data-id');

	cardsInPlay.push(cards[cardId].rank);
	cardsInPlay.push(cardId);

	this.setAttribute('src', cards[cardId].cardImage);
	
	if (cardsInPlay.length === 4) {
		// player has chosen 2 cards
		checkForMatch();
	};
};

function createBoard() {
	document.getElementById('game-board').innerHTML = "";
	for (i=0; i<cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
};

createBoard();

function resetFunc() {
	createBoard();
	scoreNum = 0;
	document.getElementById('scoreId').innerHTML = 'Score: ';
};

document.querySelector('#reset').addEventListener('click',resetFunc);