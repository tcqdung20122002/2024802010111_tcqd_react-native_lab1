import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();
  return (
   <ScrollView>
    <Text style={{alignSelf:'center',marginTop:50,fontSize:20}}>Danh sách bài thực hành 1</Text>
    
    <TouchableOpacity style={{
        marginTop: 20,
        borderWidth:2,
        height:40,
        margin:20,
        alignItems:'center',
        borderRadius:5,
        backgroundColor:'#f64e32'
    }}
    onPress={() => navigation.navigate('Project1')}
    >
        <Text style={{fontSize:20, color:'#fff'}}>Bài 1 : Hallo world </Text>
    </TouchableOpacity>

    <TouchableOpacity style={{
        marginTop: 20,
        borderWidth:2,
        height:40,
        margin:20,
        alignItems:'center',
        borderRadius:5,
        backgroundColor:'#f64e32'
    }}
    onPress={() => navigation.navigate('Project2')}
    >
        <Text style={{fontSize:20, color:'#fff'}}>Bài 2 : Capturing Taps</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{
        marginTop: 20,
        borderWidth:2,
        height:40,
        margin:20,
        alignItems:'center',
        borderRadius:5,
        backgroundColor:'#f64e32'
    }}
    onPress={() => navigation.navigate('Project3')}
    >
        <Text style={{fontSize:20, color:'#fff'}}>Bài 3 : Custom Components </Text>
    </TouchableOpacity>

    <TouchableOpacity style={{
        marginTop: 20,
        borderWidth:2,
        height:40,
        margin:20,
        alignItems:'center',
        borderRadius:5,
        backgroundColor:'#f64e32'
    }}
    onPress={() => navigation.navigate('Project4')}
    >
        <Text style={{fontSize:20, color:'#fff'}}>Bài 4 : State & Props</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{
        marginTop: 20,
        borderWidth:2,
        height:40,
        margin:20,
        alignItems:'center',
        borderRadius:5,
        backgroundColor:'#f64e32'
    }}
    onPress={() => navigation.navigate('Project5')}
    >
        <Text style={{fontSize:20, color:'#fff'}}>Bài 5 : Styling</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{
        marginTop: 20,
        borderWidth:2,
        height:40,
        margin:20,
        alignItems:'center',
        borderRadius:5,
        backgroundColor:'#f64e32'
    }}
    onPress={() => navigation.navigate('Project6')}
    >
        <Text style={{fontSize:20, color:'#fff'}}>Bài 6 : Scrollable Content</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{
        marginTop: 20,
        borderWidth:2,
        height:40,
        margin:20,
        alignItems:'center',
        borderRadius:5,
        backgroundColor:'#f64e32'
    }}
    onPress={() => navigation.navigate('Project7')}
    >
        <Text style={{fontSize:20, color:'#fff'}}>Bài 7 : Building a Form</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{
        marginTop: 20,
        borderWidth:2,
        height:40,
        margin:20,
        alignItems:'center',
        borderRadius:5,
        backgroundColor:'#f64e32'
    }}
    onPress={() => navigation.navigate('Project8')}
    >
        <Text style={{fontSize:20, color:'#fff'}}>Bài 8 : Long List</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{
        marginTop: 20,
        borderWidth:2,
        height:40,
        margin:20,
        alignItems:'center',
        borderRadius:5,
        backgroundColor:'#f64e32'
    }}
    onPress={() => navigation.navigate('Project9')}
    >
        <Text style={{fontSize:20, color:'#fff'}}>Bài 9 : Caculator</Text>
    </TouchableOpacity>

   </ScrollView>
  )
}

export default Home