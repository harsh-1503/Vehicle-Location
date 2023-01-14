import React from 'react'
import { StyleSheet, View, Text, Image, ImageBackground, Button, TouchableOpacity,Alert } from "react-native";


export default function Info(props) {
  return (
    <View style={{borderWidth:1,borderColor: "#000000",margin:10,padding:15,borderRadius:10, backgroundColor:"#91addb"}}>

        <View>
            <Text style={{fontSize:26,fontWeight: "700",color:"#ffffff"}}> Bus plate no:{props.name} </Text>
        </View>
        <Text>  </Text>
        <View>
            <View>
                <Text style={{fontSize:23,fontWeight: "400"}}>Departure Time:{props.departTime} </Text>
            </View>
            <View>
                <Text style={{fontSize:23,fontWeight: "400"}}>Arrival Time:{props.arrivalTime} </Text>
            </View>
            <Text style={{fontSize:23,fontWeight: "400"}}>Time:{props.timeRequired}</Text>
        </View>
        <Text>  </Text>
        <View>
            <Text style={{fontSize:23,fontWeight: "400"}}>Cost:{props.cost}</Text>
        </View>
    </View>
  )
}
