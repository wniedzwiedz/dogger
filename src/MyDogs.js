import React from 'react';
import './App.css';
import Buttons from './Buttons'
import MyDog from './MyDog'

import {
  Button,
  View,
  } from 'react-native';


  function MyDogs() {
    return (
      <div className="Dogs">
        <header className="Dogs-header">
          <View style={{
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
            width:"100%"
      
    }}>

<Buttons/>
<MyDog/>
<MyDog/>
<MyDog/>




        </View>
        </header>
        </div>
    );}
    export default MyDogs;