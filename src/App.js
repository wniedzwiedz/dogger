import React from 'react';
import './App.css';
import logo from './logo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <logo />
        <p>
          My first React website!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;