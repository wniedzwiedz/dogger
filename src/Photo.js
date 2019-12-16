import React from 'react';
import './App.css';
import Logo from './logo'

import DogPhoto from './DogPhoto'

import {
  Button,
  View,
  } from 'react-native';

  

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <View style={{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 10,
    marginLeft: 10
    

  }}>
        <View style={{width: "55%", alignItems:"left", marginLeft: "5%"}}>

        <DogPhoto />
        </View>
        <View style={{flexDirection: "column",width: "30%", alignItems:"center", marginRight: "5%"}}>
        <h1>IMIĘ</h1>
        <p>
        info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info 
        </p>
     
        <View style={[{ width: "80%",  margin: "10%" }]}>

        <Button 
        title="LIKE" 
        color='#fd0006'
        />
        </View>

        <View style={[{ width: "80%", margin: "10%" }]}>
        <Button 
        title="NEXT" 
        color='#009b95'
          />

      </View>

      <View style={[{ width: "90%", margin: "5%",flexDirection: "row", alignItems:"center"}]}>

      <View style={[{ width: "30%",  alignItems:"left", marginRight: "2.5%"}]}>
      <Button title="Liked" color='#a2ef00'/>
      </View>
      <View style={[{ width: "30%",  alignItems:"left",margin: "2.5%"}]}>
      <Button title="Profile" color='#a2ef00'/>
      </View>
      <View style={[{ width: "30%",  alignItems:"left", marginLeft: "2.5%"}]}>
      <Button title="Randoms" color='#a2ef00'/>
      </View>


        
      </View></View></View>


      </header>
    </div>
  );

  }
export default App;