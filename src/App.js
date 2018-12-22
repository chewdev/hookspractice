import React, { Component } from "react";
import "./App.css";
import FirstHook from "./components/FirstHook";
import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FirstHook />
        <TodoList />
      </div>
    );
  }
}

export default App;
