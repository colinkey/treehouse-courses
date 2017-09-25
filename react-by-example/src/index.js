import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase";
import "./index.css";
import Config from "./Config";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

firebase.initializeApp(Config);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
