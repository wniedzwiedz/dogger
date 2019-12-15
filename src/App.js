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
        <View style={{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 10,
    marginLeft: 10
    

  }}>
        <View style={{width: 950, alignItems:"left"}}>

       
        <DogPhoto />
        </View>
        <View style={{flexDirection: "column",width: 350, alignItems:"center"}}>
        <p>
        info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info 
        </p>
     
        <View style={[{ width: "80%", margin: 10 }]}>

        <Button 
        title="LIKE" 
        color='#0000ff'
        onPress={() => Alert.alert('Simple Button pressed')}
     
        />
        </View>

        <View style={[{ width: "80%", margin: 10 }]}>
        <Button title="NEXT" color='#ff0000'
          onPress={() => Alert.alert('Simple Button pressed')}
          />

      </View>

      <View style={[{ width: "100%", margin: 50,flexDirection: "row", alignItems:"center"}]}>

      <View style={[{ width: "30%",  alignItems:"left", marginRight: "2.5%"}]}>
      <Button title="B1" color='#00ff00'/>
      </View>
      <View style={[{ width: "30%",  alignItems:"left",margin: "2.5%"}]}>
      <Button title="B2" color='#00ff00'/>
      </View>
      <View style={[{ width: "30%",  alignItems:"left", marginLeft: "2.5%"}]}>
      <Button title="B3" color='#00ff00'/>
      </View>


        
      </View></View></View>


      </header>
    </div>
  );

  }
export default App;