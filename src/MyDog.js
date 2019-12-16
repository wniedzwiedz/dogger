import React from 'react';
import {
  View,
  } from 'react-native';
import SmallPhoto from './SmallPhoto'
  

class MyDog extends React.Component {

render(){
  
  return (
<View style={{width: "90%", alignItems:"left", marginLeft: "10%", marginTop: "2%", flexDirection: "row"}}>
<SmallPhoto />

<View style={{width: "50%", alignItems:"left", marginLeft: "5%", marginTop: "2%", flexDirection: "column"}}>

<h1>IMIĘ</h1>
<p>info info info info info info info info info info info  </p>
    </View></View>
  );
}
}

export default MyDog;