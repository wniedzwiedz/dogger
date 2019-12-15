import React from 'react';
import './App.css';
import Logo from './logo'

import DogPhoto from './DogPhoto'

import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  } from 'react-native';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <DogPhoto />
        <p>
        info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info 
        </p>
      
        <Button variant="contained" color="primary">
  Like
</Button>


      </header>
    </div>
  );

  }
export default App;