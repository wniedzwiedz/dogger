import React from 'react';
import {
  View,

  } from 'react-native';
import { render } from '@testing-library/react';
  

class DogPhoto extends React.Component {

render(){
  const url = 'https://www.zooplus.pl/magazyn/wp-content/uploads/2018/04/maltanczyk.jpg';
  return (


  <View style={{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "left",
    marginRight: 10
  }}
>
  

    <img src={url} style={{width: 750, alignItems:"left"}} alt='Image'  />
    </View>
  );
}
}

export default DogPhoto;