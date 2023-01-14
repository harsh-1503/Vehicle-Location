import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TextInput, ImageBackground, ScrollView} from 'react-native';
import Home from './components/Home';
import Login from './components/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import SvgUrl from 
import Search from './components/Search';
// export default function App() {
//   // const Input=({labe})
//   // const image = require("./ezgif-2-60050ca42b.png")
//   return (
//     <>
//       {/* <Search/> */}
//       <Home/>
//       {/* <Login/> */}
//     </>
//   );
// }
import HomeScreen from './components/Home'
import SearchScreen from './components/Search'
import InfoScreen from './components/Info'
import Info from './components/Info';
const Stack = createNativeStackNavigator();
import data from './BusData.json';
import { useEffect } from 'react';

const MyStack = () => {
  const [state,setState]=useState();
  const [route,setRoute]=useState({});
  const [ShowData,setShowData]=useState([]);
  const lapsList = ShowData.map((data) => {
    // console.warn(data.Name)
    return (
      <Info name={data.Name} departTime={data.Departure_Time_From_Source} arrivalTime={data.Arrival_Time_At_Destination} timeRequired={data.TotalTime} cost={data.Cost}/>
    )
  })
  useEffect(()=>{
    if(route!==undefined){
      // ghg
      setShowData(data.filter(i=>i.From==route.from && i.To==route.to));
    }
  },[route])
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="QuadSquad"
    //       component={HomeScreen}
    //     />
    //     <Stack.Screen name="Search" component={SearchScreen} />
    //     <Stack.Screen name="Info" component={InfoScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <>
    <ScrollView>
    <Search setRoute={setRoute}/>
      {lapsList}
    </ScrollView>
   {/* <Info/> */}
    </>
  );
};

export default MyStack