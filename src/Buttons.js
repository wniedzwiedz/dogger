import React from 'react';
  import {
    Button,
    View,
    } from 'react-native';
  

class Buttons extends React.Component {

render(){
  
  return (
<View style={{width: "100%", alignItems:"center", flexDirection: "row",backgroundColor: "#FFFFFF"}}>

<View style={[{ width: "20%",  alignItems:"left", marginRight: "5%", marginLeft: "2.5%"}]}>
      <Button title="Liked" color='#a2ef00'/>
      </View>

      <View style={[{ width: "20%",  alignItems:"left",marginLeft: "0%"}]}>
      <Button title="Profile" color='#a2ef00'/>
      </View>

      <View style={[{ width: "20%",  alignItems:"left", marginLeft: "5%"}]}>
      <Button title="Search" color='#a2ef00'/>
      </View>

      <View style={[{ width: "20%",  alignItems:"left", marginLeft: "5%"}]}>
      <Button title="Add a dog" color='#a2ef00'/>
      </View>

</View>
  );
}
}

export default Buttons;