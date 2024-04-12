import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const Project4 = () => {
  const [pressCount, setCount] = useState(0);
  return (
    <View style={{ alignItems:'center', marginTop:100}}>
      <Text style={{fontSize:20, marginBottom:50}}>Bạn đã nhấn vào cái nút này tận {pressCount} lần</Text>
      <Button 
      
      title={`Đã nhấn ${pressCount} lần`}
      onPress={()=> setCount(pressCount + 1)}
      />
    </View>
  )
}

export default Project4