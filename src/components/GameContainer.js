import React from "react";
import GameCard from "./GameCard";
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
        {id: 0, image: "http://lorempixel.com/output/animals-q-c-200-200-4.jpg", guessed: false},
        {id: 1, image: "http://lorempixel.com/output/animals-q-c-200-200-2.jpg", guessed: false},
        {id: 2, image: "http://lorempixel.com/output/animals-q-c-200-200-5.jpg", guessed: false},
        {id: 3, image: "http://lorempixel.com/output/animals-q-c-200-200-3.jpg", guessed: false},
        {id: 4, image: "http://lorempixel.com/output/animals-q-c-200-200-1.jpg", guessed: false},
        {id: 5, image: "http://lorempixel.com/output/animals-q-c-200-200-6.jpg", guessed: false},
        {id: 6, image: "http://lorempixel.com/output/animals-q-c-200-200-7.jpg", guessed: false},
        {id: 7, image: "http://lorempixel.com/output/animals-q-c-200-200-10.jpg", guessed: false},
        {id: 8, image: "http://lorempixel.com/output/animals-q-c-200-200-8.jpg", guessed: false},
        {id: 9, image: "http://lorempixel.com/output/animals-q-c-200-200-9.jpg", guessed: false},
        {id: 10, image: "http://lorempixel.com/output/nature-q-c-200-200-3.jpg", guessed: false},
        {id: 11, image: "http://lorempixel.com/output/nature-q-c-200-200-2.jpg", guessed: false},
      ],
    };

    this.handleClick = this.handleClick.bind(this);
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

    const alreadyGuessed = card.guessed;
    if (alreadyGuessed) {
      this.lose();
    } else {
      this.guessCorrect(cards, card);
    }
  }

  lose() {
    const cards = this.state.cards;
    for (const card of cards) {
      card.guessed = false;
    }

    this.setState({
      cards: shuffle(cards),
      score: 0,
    });
  }

  render() {
    return (
      <div className="game-container">
        <IndicatorPanel
          score={this.state.score}
          highScore={this.state.highScore}
        />
        
        <div className="card-container">
          {this.renderCards()}
        </div>
      </div>
    );
  }

  renderCards() {
    return this.state.cards.map((card) => {
      return (
        <GameCard
          handleClick={this.handleClick}
          key={card.id}
          id={card.id}
          image={card.image}
        />
      );
    })
  }
}

export default GameContainer;