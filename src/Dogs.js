import React from 'react';
import './App.css';
import Buttons from './Buttons'
import More from './More'
import FivePhotos from './FivePhotos'

import {
  Button,
  View,
  } from 'react-native';


  function Dogs() {
    return (
      <div className="Dogs">
        <header className="Dogs-header">
          <View style={{
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",

      
    }}>

<Buttons/>
<FivePhotos/>
<FivePhotos/>
<More/>




        </View>
        </header>
        </div>
    );}
    export default Dogs;