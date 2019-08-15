import React from 'react';
import logo from './jacob.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Jacob is a poo poo head
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/tehyock"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jacob Nubssbaum
        </a>
      </header>
    </div>
  );
}

export default App;
