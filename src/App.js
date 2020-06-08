import React from "react";
import "./App.css";
import Routes from "./Routes";
import { Router } from "react-router-dom";
import history from "./history";
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
