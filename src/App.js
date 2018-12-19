import React, { Component } from "react";
import "./App.css";
import FirstHook from "./components/FirstHook";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FirstHook />
      </div>
    );
  }
}

export default App;
