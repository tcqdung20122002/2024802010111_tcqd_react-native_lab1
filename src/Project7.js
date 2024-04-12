import { View, Text ,StyleSheet, TextInput, Button} from 'react-native'
import React, { useState } from 'react'

const Project7 = () => {
  const [name,setName] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tên gì ??</Text>
      <TextInput
        style={styles.input}
        placeholder='Dũng'
        placeholderTextColor="rgba(0,0,0,0.5)"
        onChangeText={(text) =>setName(text)}
        value={name}
      />
      <Button
        title='Nói Chào'
        onPress={() =>{
          alert(`Hello, ${name}!!!`);
          setName("");
        }}
      />
    </View>
  )
}

export default Project7

const styles = StyleSheet.create(
  {
    container:{
      padding:20,
      
    },
    label:{
      fontWeight:'bold',
      fontSize:18,
    },
    input:{
      marginTop: 10,
      backgroundColor:'rgba(0,0,0,0.1)',
      padding:10,
      borderRadius:5,
    }
  }
)