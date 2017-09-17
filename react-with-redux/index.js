import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Scoreboard from "./src/containers/Scoreboard";
import PlayerReducer from "./src/reducers/player.js";

const store = createStore(
  PlayerReducer,
  window.devToolsExtension && window.devToolsExtension()
);

render(
  <Provider store={store}>
    <Scoreboard />
  </Provider>,
  document.getElementById("root")
);
