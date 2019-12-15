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
        <View style={{flexDirection: "column",width: 350, alignItems:"right"}}>
        <p>
        info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info 
        </p>
     
        <Button 
        title="LIKE" 
        color='#0000ff'
        onPress={() => Alert.alert('Simple Button pressed')}
        buttonStyle={{
          backgroundColor: "white",
          borderRadius: 60,
          flex: 1,
          height: 30,
          width: 30,  
      }}
        />
<Button title="NEXT" color='#ff0000' style={{ borderColor: "transparent",
      borderRadius: 20, 
      width: 250}}>
</Button>
      </View>
        
</View>


      </header>
    </div>
  );

  }
export default App;