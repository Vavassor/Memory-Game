import React from "react";

class EndScreen extends React.Component {
  render() {
    return (
      <div className="end-screen">
        <h2>{this.props.message}</h2>
        <div className="indicator">Final Score <span className="indicator-value">{this.props.score}</span></div>
        <button type="button" onClick={this.props.handleRetry}>Retry</button>
      </div>
    );
  }
}

export default EndScreen;