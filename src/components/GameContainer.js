import React from "react";
import EndScreen from "./EndScreen";
import GameCardContainer from "./GameCardContainer";
import IndicatorPanel from "./IndicatorPanel";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class GameContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      highScore: 0,
      score: 0,
      cards: [
        {id: 0, image: "http://lorempixel.com/output/animals-q-c-200-200-4.jpg", guessed: false, contentDescription: "Giraffe"},
        {id: 1, image: "http://lorempixel.com/output/animals-q-c-200-200-2.jpg", guessed: false, contentDescription: "Gorilla"},
        {id: 2, image: "http://lorempixel.com/output/animals-q-c-200-200-5.jpg", guessed: false, contentDescription: "Deer"},
        {id: 3, image: "http://lorempixel.com/output/animals-q-c-200-200-3.jpg", guessed: false, contentDescription: "Tiger"},
        {id: 4, image: "http://lorempixel.com/output/animals-q-c-200-200-1.jpg", guessed: false, contentDescription: "Rhino"},
        {id: 5, image: "http://lorempixel.com/output/animals-q-c-200-200-6.jpg", guessed: false, contentDescription: "Pig"},
        {id: 6, image: "http://lorempixel.com/output/animals-q-c-200-200-7.jpg", guessed: false, contentDescription: "Cat"},
        {id: 7, image: "http://lorempixel.com/output/animals-q-c-200-200-10.jpg", guessed: false, contentDescription: "Horse"},
        {id: 8, image: "http://lorempixel.com/output/animals-q-c-200-200-8.jpg", guessed: false, contentDescription: "Puppy"},
        {id: 9, image: "http://lorempixel.com/output/animals-q-c-200-200-9.jpg", guessed: false, contentDescription: "Dog"},
        {id: 10, image: "http://lorempixel.com/output/nature-q-c-200-200-3.jpg", guessed: false, contentDescription: "Beach"},
        {id: 11, image: "http://lorempixel.com/output/nature-q-c-200-200-2.jpg", guessed: false, contentDescription: "Sunset"},
      ],
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleRetry = this.handleRetry.bind(this);
  }

  guessCorrect(cards, card) {
    this.setState((state, props) => {
      const newScore = state.score + 1;
      const highScore = Math.max(newScore, state.highScore);
      card.guessed = true;

      return {
        cards: shuffle(cards),
        highScore: highScore,
        score: newScore,
      };
    });
  }

  handleClick(id) {
    const cards = this.state.cards;
    const card = cards.find(card => card.id === id);

    const winScore = cards.length;
    const alreadyGuessed = card.guessed;
    if (alreadyGuessed) {
      this.resetAndSwitchScreen("loss");
    } else if (this.state.score + 1 === winScore) {
      this.win();
    } else {
      this.guessCorrect(cards, card);
    }
  }

  handleRetry() {
    this.setState({
      score: 0,
      screen: "play",
    });
  }

  render() {
    let screen;
    switch (this.state.screen) {
      case "loss":
        screen = this.renderLossScreen();
        break;

      default:
      case "play":
        screen = this.renderCardContainer();
        break;

      case "win":
        screen = this.renderWinScreen();
        break;
    }

    return (
      <div className="game-container">
        <IndicatorPanel
          score={this.state.score}
          highScore={this.state.highScore}
        />
        {screen}
      </div>
    );
  }

  renderCardContainer() {
    return (
      <GameCardContainer
        cards={this.state.cards}
        handleClick={this.handleClick}
      />
    );
  }

  renderLossScreen() {
    return (
      <EndScreen
        message="You lose!"
        handleRetry={this.handleRetry}
        score={this.state.score}
      />
    );
  }

  renderWinScreen() {
    return (
      <EndScreen
        message="You win!"
        handleRetry={this.handleRetry}
        score={this.state.score}
      />
    );
  }

  resetAndSwitchScreen(screen) {
    const cards = this.state.cards;
    for (const card of cards) {
      card.guessed = false;
    }

    this.setState({
      cards: shuffle(cards),
      screen: screen,
    });
  }

  win() {
    const score = this.state.score + 1;
    this.setState({
      score: score,
      highScore: score,
    });
    this.resetAndSwitchScreen("win");
  }
}

export default GameContainer;