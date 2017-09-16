import React, { PropTypes } from "react";
import Stats from "./Stats.js";
import Stopwatch from "./Stopwatch.js";

const Header = props => {
  return (
    <div className="header">
      <Stats players={props.players} />
      <h1>Scoreboard</h1>
      <Stopwatch />
    </div>
  );
};

Header.propTypes = {
  players: PropTypes.array.isRequired
};

export default Header;
