import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


const Button =(props) =>(
  <TouchableOpacity 
  onPress={props.onPress}
  style={{
    backgroundColor:'#ff637c',
    alignItems:'center',
    padding:10,
    margin:10,
    ...props.buttonStyle
  }}
  >
    <Text style={{color:'#fff'}}>{props.text}</Text>
  </TouchableOpacity>
);
const Project3 = () => {
  return (
    <View style={{flex:1, justifyContent:'center'}}>
      <Button text ="Say Hallo" onPress={()=> alert('hallo!')}/>
      <Button
       text ="Say gút bai" 
       onPress={()=> alert('gút bai!')}
       buttonStyle={{backgroundColor:'#f64e32' }}
       />
    </View>
  )
}

export default Project3