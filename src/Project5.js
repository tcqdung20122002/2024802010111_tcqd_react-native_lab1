import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Square =({ text, bgColor = "#f64e32"}) => (
  <View style={[styles.box, {backgroundColor : bgColor }]}>
    <Text>{text}</Text>
  </View>
);
const Project5 = () => {
  return (
    <View style={styles.container}>
      <Square text="Square 1"/>
      <Square text="Square 1" bgColor='#4dc2c2'/>
      <Square text="Square 1"bgColor='#ff637c'/>
    </View>
  );
};

export default Project5

const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'space-around',
    },
    box:{
      width:100,
      height:100,
      justifyContent:'center',
      alignItems:'center',
    },
  }
)