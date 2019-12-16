import React from 'react';
import {
  View,
  } from 'react-native';
import SmallPhoto from './SmallPhoto'
  

class FivePhotos extends React.Component {

render(){
  
  return (
<View style={{width: "98%", alignItems:"center", marginLeft: "2%", marginTop: "2%", flexDirection: "row"}}>
<SmallPhoto />
<SmallPhoto />
<SmallPhoto />
<SmallPhoto />
</View>
  );
}
}

export default FivePhotos;