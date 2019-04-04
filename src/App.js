import React from "react";
import "./App.css";
import GameContainer from "./components/GameContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Memory Game</h1>

          <section className="instructions">
            <h2>Instructions</h2>
            <p>Clicking cards earns points. Avoid choosing any cards already chosen.</p>
          </section>
        </header>

        <main>
          <GameContainer />
        </main>
      </div>
    );
  }
}

export default App;