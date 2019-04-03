import React from "react";

class IndicatorPanel extends React.Component {
  render() {
    return (
      <div className="indicator-panel">
        <div className="indicator">Score <span className="indicator-value">{this.props.score}</span></div>
        <div className="indicator">High Score <span className="indicator-value">{this.props.highScore}</span></div>
      </div>
    );
  }
}

export default IndicatorPanel;