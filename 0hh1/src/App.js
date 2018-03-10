import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './containers/Board';
import CreateGameButton from './components/CreateGameButton';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">0hh1</h1>
        <Board />
          <div className="actions">
           <CreateGameButton />
          </div>

      </div>
    )
  }
}

export default App;
