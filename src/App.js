import React, { Component } from 'react';
import MainCard from './components/MainCard'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MainCard/>
        </header>
      </div>
    );
  }
}

export default App;
