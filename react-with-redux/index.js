import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { CreateStore } from "react-redux";
import Scoreboard from "./src/containers/Scoreboard";
import PlayerReducer from "./src/reducers/player.js";

const store = CreateStore(PlayerReducer);

render(
  <Provider store={store}>
    <Scoreboard />
  </Provider>,
  document.getElementById("root")
);
