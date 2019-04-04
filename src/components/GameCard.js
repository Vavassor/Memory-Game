import React from "react";

class GameCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    if (event.key === " " || event.key === "Enter") {
      this.props.handleClick(this.props.id);
    }
  }

  render() {
    return (
      <div
        className="game-card"
        onClick={() => this.props.handleClick(this.props.id)}
        onKeyPress={this.handleKeyPress}
        tabIndex="0"
        role="button"
      >
        <img className="game-card-image" src={this.props.image} alt={this.props.contentDescription} />
      </div>
    );
  }
}

export default GameCard;