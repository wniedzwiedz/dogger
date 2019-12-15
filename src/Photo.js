import React from 'react';
import './App.css';
import Logo from './logo'

function Photo() {
  return (
    <div className="Photo">
      <header className="Photo-header">
        
        <DogPhoto />
        <p>
          Psy!
        </p>
        <a
          className="Photo-link"
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



export default Photo;