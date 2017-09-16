import React, { Component } from "react";
import AddPlayerForm from "../components/AddPlayerForm.js";
import Player from "../components/Player.js";
import Header from "../components/Header.js";

export default class Scoreboard extends Component {
  onScoreChange = (index, delta) => {
    this.state.players[index].score += delta;
    this.setState(this.state);
  };

  onAddPlayer = name => {
    this.state.players.push({ name: name, score: 0 });
    this.setState(this.state);
  };

  onRemovePlayer = index => {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  };

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />
        <div className="players">
          {this.state.players.map(
            function(player, index) {
              return (
                <Player
                  name={player.name}
                  score={player.score}
                  key={player.name}
                  onScoreChange={delta => this.onScoreChange(index, delta)}
                  onRemove={() => this.onRemovePlayer(index)}
                />
              );
            }.bind(this)
          )}
        </div>
        <AddPlayerForm onAdd={this.onAddPlayer} />
      </div>
    );
  }
}

// Move to components/Header.js
// ----------------------------------------------

// Move to components/Stats.js
// -----------------------------------------------------------------------

// Move to components/Player.js
// ----------------------------------------------------------------------

// Move to components/Counter.js
// ----------------------------------------------------------