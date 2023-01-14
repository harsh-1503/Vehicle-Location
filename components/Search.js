import React, { useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TextInput} from 'react-native';

const Search=({setRoute})=>{
  const [reff,setRef]=useState();
  const MakeASearch=(e)=>{
    setTimeout(()=>{
      setRoute({from:reff,to:e});
    },2000)
  }
  return (
    <>
      <View style={styles.container} >
      
      <View style={{flex:1}}>
        <View style={{flex:1,flexDirection: "row", marginVertical:10}}>
            <Image style={{width: 44,height: 44, marginVertical:10}}source={require("./locblue.png")}/>
            <TextInput placeholder='Starting Location' onChangeText={(e)=> setRef(e)}  style={{fontSize:15,borderColor: '#000000',borderWidth: 2,padding: 10,borderRadius: 10,margin: 10, height: 40, alignItems:"center", justifyContent:"center", width:"75%"}}></TextInput>
        </View>
        <View style={{flex:1,flexDirection: "row"}}>
            <Image style={{width: 40,height: 40, resizeMode:'stretch', marginVertical:10}}source={require("./red.png")}/>
            <TextInput placeholder='Destination' onChangeText={MakeASearch}  style={{fontSize:15,borderColor: '#000000',borderWidth: 2,padding: 10,borderRadius: 10,margin: 10, height: 40, alignItems:"center", justifyContent:"center", width:"75%"}}></TextInput>
        </View>
      </View>
      <View style={{flex:4}}></View>
      <StatusBar style="auto" />
    </View>
    </>
  )
}
export default Search
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width:"100%"
    }
    
  });
