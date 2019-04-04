import React from "react";
import GameCard from "./GameCard";

class GameCardContainer extends React.Component {
  render() {
    const cards = this.props.cards.map((card, index) => {
      return (
        <GameCard
          handleClick={this.props.handleClick}
          key={card.id}
          id={card.id}
          image={card.image}
          contentDescription={card.contentDescription}
        />
      );
    });

    return (
      <div className="card-container">
        {cards}
      </div>
    );
  }
}

export default GameCardContainer;