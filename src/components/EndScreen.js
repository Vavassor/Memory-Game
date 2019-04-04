import React from "react";

class EndScreen extends React.Component {
  componentDidMount() {
    this.retry.focus();
  }

  render() {
    return (
      <div className="end-screen">
        <h2>{this.props.message}</h2>
        <div className="indicator end-screen-indicator">Final Score <span className="indicator-value">{this.props.score}</span></div>
        <button
          className="retry"
          type="button"
          onClick={this.props.handleRetry}
          ref={(input) => {this.retry = input;} }
        >
          Retry
        </button>
      </div>
    );
  }
}

export default EndScreen;