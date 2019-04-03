import React from "react";

class GameCard extends React.Component {
  render() {
    return (
      <div className="card game-card" onClick={() => this.props.handleClick(this.props.id)}>
        {this.props.guessed ? <p>Guessed</p> : <p></p>}
        <img src={this.props.image} alt="" />
      </div>
    );
  }
}

export default GameCard;