import React from 'react';
  import {
    Button,
    View,
    } from 'react-native';
  

class More extends React.Component {

render(){
  
  return (
<View style={{width: "100%", alignItems:"center", marginTop: "2%"}}>

<View style={[{ width: "20%",  alignItems:"left", marginRight: "5%", marginLeft: "5%"}]}>

      <Button title="MORE" color='#a2ef00'/>
</View>

</View>
  );
}
}

export default More;