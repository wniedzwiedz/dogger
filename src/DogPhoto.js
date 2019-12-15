import React from 'react';

function DogPhoto() {
  const url = 'https://www.zooplus.pl/magazyn/wp-content/uploads/2018/04/maltanczyk.jpg';
  <View style={{
    flexDirection: "row",
    justifyContent: "space-between"
  }}
>
  
  return (
    <View style={{ alignItems: "center", marginRight: 10 }}>
    <img src={url} style={{width: 750, alignItems:"left"}} alt='Image'  />
    </View>
  );
}

export default DogPhoto;