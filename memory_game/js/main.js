var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var cardOne = cards[0];

cardsInPlay.push(cardOne);

console.log("User flipped " + cardsInPlay[0]);

var cardTwo = cards[1];

cardsInPlay.push(cardTwo);

console.log("User flipped " + cardsInPlay[1]);

if (cardsInPlay.length === 2) {
	// player has chosen 2 cards
	if (cardsInPlay[0] === cardsInPlay[1]) {
		// both cards are the same
		alert("You found a match!");
	}
	else {
		alert('Sorry, try again.')
	}
}