import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Project1 = () => {
    const navigation = useNavigation();
  return (
    <View style={MyStyle.ViewStyle}>
      <Text style={MyStyle.StyleText}>Hallo World</Text>
    </View>
  )
}

export default Project1

var MyStyle = StyleSheet.create(
    {
        ViewStyle:{
            width:100,
            height:100,
            backgroundColor:'aqua',
            alignItems:'center',
            justifyContent:'center'
        },
        StyleText:{
            color:'black'
        }
    }
)