//make loop to fill card array.
//rank will become one character from array
//change the position of the comment to add more cards
var ranks = ['A','2','3','4','5','6'];//,'7','8','9','10','J','Q','K'];
var cards = [];

//cards repeat 2 times. Change the j<2 to make more duplicates
for (j=0; j<2; j++) {
	for (i=0; i<ranks.length; i++) {
		cards[i+ranks.length*j] = {
			rank: ranks[i],
			suit: "hearts",
			randomNum: Math.random()
		}
	}
}
var shuffle = function(deck) {
	return deck.sort(function(a,b){return (b.randomNum - a.randomNum)});
}

cards = shuffle(cards);

var cardsInPlay = [];
var scoreNum = 0;

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[2]) {
	  alert("You found a match!");
	  scoreNum += 1;
	  document.getElementById('scoreId').innerHTML = 'Score: ' + scoreNum;
	} else {
	  alert("Sorry, try again. Your second card was a " + cards[cardsInPlay[3]].rank);
	  document.querySelectorAll('#floater')[cardsInPlay[1]].innerHTML = '<img src = "images/back.png">';
	  document.querySelectorAll('#floater')[cardsInPlay[3]].innerHTML = '<img src = "images/back.png">';
	  document.querySelectorAll('#floater')[cardsInPlay[1]].removeAttribute("class");
	  document.querySelectorAll('#floater')[cardsInPlay[3]].removeAttribute("class");
	}
	 cardsInPlay = [];
}

var flipCard = function() {
	var cardId = this.getAttribute('data-id');

	//cardsInPlay will be an array. First element will be rank, second will be cardId
	cardsInPlay.push(cards[cardId].rank);
	cardsInPlay.push(cardId);

	this.setAttribute("class", "checker");
	this.innerHTML = cards[cardId].rank;
	
	if (cardsInPlay.length === 4) {
		// player has chosen 2 cards
		checkForMatch();
	}
}

var createBoard = function() {
	document.getElementById('game-board').innerHTML = "";
	for (i=0; i<cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.setAttribute('data-id', i);
		cardElement.setAttribute('id', "floater");
		cardElement.innerHTML = '<img src = "images/back.png">';
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

createBoard();

var resetFunc = function() {
	createBoard();
	scoreNum = 0;
	document.getElementById('scoreId').innerHTML = 'Score: ';
	//shuffle cards by assigning a new random number in each object
	for (i=0; i<cards.length; i++) {
		cards[i].randomNum = Math.random();
	}
	cards = shuffle(cards);
}

document.querySelector('#reset').addEventListener('click',resetFunc);