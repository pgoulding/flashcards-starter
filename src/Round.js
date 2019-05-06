const Turn = require('../src/Turn')
const Game = require('../src/Game')
class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.card[this.turns];
  }
  takeTurn(guess) {
    let turn = new Turn(this.returnCurrentCard(), guess);
    this.turns++
    turn.evaluateGuess() ? null : this.incorrectGuesses.push(turn.card.id);
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    return Math.floor((this.turns - this.incorrectGuesses.length)
    / this.turns * 100);
  }
  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    console.log(`${this.calculatePercentCorrect() > 90 ? 'Congratulations, you passed!' : 'You suck, try harder'}`);
  }
}

module.exports = Round;