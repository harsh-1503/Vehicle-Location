import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground, Button, TouchableOpacity,Alert } from "react-native";
import Info from "./Info";
const Home = ({navigation}) => {
  
    const image = require("./ezgif-2-60050ca42b.png")
  return (
    <>
    <ImageBackground style={{height:"100%",zIndex: -1,position: "relative",}} source={image}>
      <View style={{flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",zIndex: 1,}} >
        <View 
          style={{
            flex: 1,
            alignItems: "center",
            width: "98%",
            backgroundColor: "#91addb",
            margin: 30,
            padding: 10,
            height: 10,
            borderRadius: 10,
            width: "90%"
            
          }}
        >
        <Text style={{ marginVertical: 10, fontSize: 40, }}>Track your ride!!!</Text>
        </View>
        <View
          style={{
            flex: 8,
            flexDirection: "column",
            justifyContent: "center",
            width: "98%",
            margin: 10,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          
          <View
            style={{
              flex: 2,
              flexDirection: "row",
              backgroundColor: "#f0f0f0",
              width: "75%",
              margin: 10,
              borderRadius: 20,
              shadowColor: "#000000",
              shadowOffset: { width: -2, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
            }}
          >
          <TouchableOpacity onPress={(e)=>{
            navigation.navigate('Search')
          }}>
            <Image style={{width:325,height:300}} source={require("./Myproject2.png")} />
            {/* <Image source={require("./Myproject.png")} /> */}
          </TouchableOpacity>
          </View>
          {/* <View
            style={{
              flex: 2,
              flexDirection: "row",
              width: "75%",
              margin: 30,
              borderRadius: 20,
              backgroundColor: "#f0f0f0",
            }}
          >
          <TouchableOpacity onPress={(e)=>{
            navigation.navigate('Search')
          }}>
            
            <Image source={require("./Myproject.png")} />
          </TouchableOpacity>
          </View> */}
        </View>
      </View>
      </ImageBackground>
    </>
  );
};
export default Home;
const styles = StyleSheet.create({
  contain: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  boxes: {
    width: "40%",
    height: "40%",
    flex: 1,
    flexDirection: "row",
  },
  modeContainer: {
    backgroundColor: "#FFE5B4",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    fontSize: 40,
    width: "50%",
    margin: "auto",
  }
});
