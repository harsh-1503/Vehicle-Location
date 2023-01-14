import React from 'react';
import MapView, { Circle, Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import * as Location from "expo-location";

export default function App() {
  const [pin,setPin] = React.useState({
    latitude: 18.528000011746233,
    longitude: 73.85099351406097,
  });

  React.useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setPin({
        latitude:location.coords.latitude,
        longitude:location.coords.longitude,
      })
    })();
  }, []);


  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude:17.659920,
          longitude:75.906387,
          latitudeDelta: 0.005,
          longitudeDelta: 0.0005,
        }}
        showsUserLocation={true}
        followsUserLocation={true}

        onUserLocationChange={(e)=>{
          setPin({
            latitude:e.nativeEvent.latitude,
            longitude:e.nativeEvent.longitude,
          });
        }}
      >





        {/* Second marker */}
        <Marker
          coordinate={{
            latitude: 19.0099,
            longitude: 72.8427
          }}
          draggable={true}
          title="Destination"
          pinColor='green'
          onDragStart={(e)=>{
            console.log(e.nativeEvent.coordinate);
          }}
          onDragEnd={(e)=>{
            console.log(e.nativeEvent.coordinate);

            setPin({  
              latitude: e.nativeEvent.coordinate.latitude,
              longitude:e.nativeEvent.coordinate.longitude,
            });
          }}
        ></Marker>
        <Marker
          coordinate={{
            latitude: 18.528000011746233,
            longitude: 73.85099351406097,
          }}
          title="Source"
          pinColor='red'
        ></Marker>
    
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
    marginTop: '10%'
  },
});


// [
//   {
//     "id": "MSRTC - 705463",
//     "Name": "MSRTC - 738783",
//     "TotalTime": "03h 15m",
//     "Arrival_Time_At_Destination": "01:15",
//     "Departure_Time_From_Source": "22:00",
//     "Source": "Dadar East",
//     "Destination": "Swargate,Pune",
//     "Source_Latitude": "19.0099",
//     "Source_Longitude": "72.8427",
//     "Destination_Latitude": "18.5204",
//     "Destination_Longitude": "73.8567",
//     "Cost": "535",
//     "From": "Mumbai",
//     "To": "Pune"
//   },
//   {
//     "id": "MSRTC - 705463",
//     "Name": "MSRTC - 705463",
//     "TotalTime": "03h 15m",
//     "Arrival_Time_At_Destination": "23:15",
//     "Departure_Time_From_Source": "20:31",
//     "Source": "Dadar East",
//     "Destination": "Nigdi",
//     "Source_Latitude": "19.0099",
//     "Source_Longitude": "72.8427",
//     "Destination_Latitude": "18.5204",
//     "Destination_Longitude": "73.8567",
//     "Cost": "515",
//     "From": "Mumbai",
//     "To": "Pune"
//   },
//   {
//     "id": "MSRTC - 738783",
//     "Name": "MSRTC - 738783",
//     "TotalTime": "03h 15m",
//     "Arrival_Time_At_Destination": "01:15",
//     "Departure_Time_From_Source": "22:00",
//     "Source": "Dadar East",
//     "Destination": "Swargate,Pune",
//     "Source_Latitude": "19.0099",
//     "Source_Longitude": "72.8427",
//     "Destination_Latitude": "18.5204",
//     "Destination_Longitude": "73.8567",
//     "Cost": "535",
//     "From": "Mumbai",
//     "To": "Pune"
//   },
//   {
//     "id": "MSRTC - 738760",
//     "Name": "MSRTC - 738760",
//     "TotalTime": "01h 45m",
//     "Arrival_Time_At_Destination": "20:45",
//     "Departure_Time_From_Source": "19:00",
//     "Source": "Dadar East",
//     "Destination": "Vanaj",
//     "Source_Latitude": "19.0099",
//     "Source_Longitude": "72.8427",
//     "Destination_Latitude": "18.5077",
//     "Destination_Longitude": "73.8567",
//     "Cost": "535",
//     "From": "Mumbai",
//     "To": "Pune"
//   },
//   {
//     "id": "MSRTC - 738775",
//     "Name": "MSRTC - 738775",
//     "TotalTime": "03h 15m",
//     "Arrival_Time_At_Destination": "00:15",
//     "Departure_Time_From_Source": "21:00",
//     "Source": "Dadar East",
//     "Destination": "Swargate,Pune",
//     "Source_Latitude": "19.0099",
//     "Source_Longitude": "72.8427",
//     "Destination_Latitude": "18.5018",
//     "Destination_Longitude": "73.8636",
//     "Cost": "535",
//     "From": "Mumbai",
//     "To": "Pune"
//   },
//   {
//     "id": "MSRTC - 742010",
//     "Name": "MSRTC - 742010",
//     "TotalTime": "04h 55m",
//     "Arrival_Time_At_Destination": "02:50",
//     "Departure_Time_From_Source": "21:55",
//     "Source": "Vishhram Bag",
//     "Destination": "Swargate,Pune",
//     "Source_Latitude": "16.8524",
//     "Source_Longitude": "74.5815",
//     "Destination_Latitude": "18.5018",
//     "Destination_Longitude": "73.8636",
//     "Cost": "530",
//     "From": "Sangli",
//     "To": "Pune"
//   },
//   {
//     "id": "MSRTC - 741795",
//     "Name": "MSRTC - 741795",
//     "TotalTime": "04h 50m",
//     "Arrival_Time_At_Destination": "23:15",
//     "Departure_Time_From_Source": "18:25",
//     "Source": "Vishhram Bag",
//     "Destination": "Swargate,Pune",
//     "Source_Latitude": "16.8524",
//     "Source_Longitude": "74.5815",
//     "Destination_Latitude": "18.5018",
//     "Destination_Longitude": "73.8636",
//     "Cost": "530",
//     "From": "Sangli",
//     "To": "Pune"
//   },
//   {
//     "id": "MSRTC - 758988",
//     "Name": "MSRTC - 758988",
//     "TotalTime": "04h 50m",
//     "Arrival_Time_At_Destination": "04:20",
//     "Departure_Time_From_Source": "23:30",
//     "Source": "Sangli",
//     "Destination": "Swargate,Pune",
//     "Source_Latitude": "16.8524",
//     "Source_Longitude": "74.5815",
//     "Destination_Latitude": "18.5018",
//     "Destination_Longitude": "73.8636",
//     "Cost": "515",
//     "From": "Sangli",
//     "To": "Pune"
//   },
//   {
//     "id": "MSRTC - 684455",
//     "Name": "MSRTC - 684455",
//     "TotalTime": "04h 15m",
//     "Arrival_Time_At_Destination": "22:45",
//     "Departure_Time_From_Source": "18:30",
//     "Source": "Sangli",
//     "Destination": "Swargate,Pune",
//     "Source_Latitude": "16.8524",
//     "Source_Longitude": "74.5815",
//     "Destination_Latitude": "18.5018",
//     "Destination_Longitude": "73.8636",
//     "Cost": "505",
//     "From": "Sangli",
//     "To": "Pune"
//   },
//   {
//     "id": "MSRTC - 687947",
//     "Name": "MSRTC - 687947",
//     "TotalTime": "04h 15m",
//     "Arrival_Time_At_Destination": "22:30",
//     "Departure_Time_From_Source": "18:05",
//     "Source": "Sangli",
//     "Destination": "Katraj",
//     "Source_Latitude": "16.8524",
//     "Source_Longitude": "74.5815",
//     "Destination_Latitude": "18.4529",
//     "Destination_Longitude": "73.8652",
//     "Cost": "349",
//     "From": "Sangli",
//     "To": "Pune"
//   },
//   {
//     "id": "MSRTC - 677084",
//     "Name": "MSRTC - 677084",
//     "TotalTime": "03h 15m",
//     "Arrival_Time_At_Destination": "22:15",
//     "Departure_Time_From_Source": "19:00",
//     "Source": "Swargate, Pune",
//     "Destination": "Andheri East",
//     "Source_Latitude": "16.8524",
//     "Source_Longitude": "74.5815",
//     "Destination_Latitude": "18.4529",
//     "Destination_Longitude": "73.8652",
//     "Cost": "535",
//     "From": "Pune",
//     "To": "Mumbai"
//   },
//   {
//     "id": "MSRTC - 723864",
//     "Name": "MSRTC - 723864",
//     "TotalTime": "03h 15m",
//     "Arrival_Time_At_Destination": "21:16",
//     "Departure_Time_From_Source": "18:01",
//     "Source": "Pune Railway STN",
//     "Destination": "Dadar East",
//     "Source_Latitude": "18.5284",
//     "Source_Longitude": "73.8739",
//     "Destination_Latitude": "19.0099",
//     "Destination_Longitude": "72.8427",
//     "Cost": "515",
//     "From": "Pune",
//     "To": "Mumbai"
//   },
//   {
//     "id": "MSRTC - 723882",
//     "Name": "MSRTC - 723882",
//     "TotalTime": "02h 40m",
//     "Arrival_Time_At_Destination": "21:25",
//     "Departure_Time_From_Source": "18:45",
//     "Source": "Pune Railway STN",
//     "Destination": "Vashi",
//     "Source_Latitude": "18.5284",
//     "Source_Longitude": "73.8739",
//     "Destination_Latitude": "18.7501",
//     "Destination_Longitude": "73.0421",
//     "Cost": "515",
//     "From": "Pune",
//     "To": "Mumbai"
//   },
//   {
//     "id": "MSRTC - 617541",
//     "Name": "MSRTC - 617541",
//     "TotalTime": "03h 15m",
//     "Arrival_Time_At_Destination": "22:16",
//     "Departure_Time_From_Source": "19:01",
//     "Source": "Pune Railway STN",
//     "Destination": "Dadar East",
//     "Source_Latitude": "18.5284",
//     "Source_Longitude": "73.8739",
//     "Destination_Latitude": "19.0099",
//     "Destination_Longitude": "72.8427",
//     "Cost": "515",
//     "From": "Pune",
//     "To": "Mumbai"
//   },
//   {
//     "id": "MSRTC - 733415",
//     "Name": "MSRTC - 733415",
//     "TotalTime": "04h 20m",
//     "Arrival_Time_At_Destination": "09:50",
//     "Departure_Time_From_Source": "05:30",
//     "Source": "Swargate, Pune",
//     "Destination": "Sangli",
//     "Source_Latitude": "16.8524",
//     "Source_Longitude": "74.5815",
//     "Destination_Latitude": "16.8524",
//     "Destination_Longitude": "74.5815",
//     "Cost": "515",
//     "From": "Pune",
//     "To": "Sangli"
//   },
//   {
//     "id": "MSRTC - 738519",
//     "Name": "MSRTC - 738519",
//     "TotalTime": "04h 20m",
//     "Arrival_Time_At_Destination": "11:50",
//     "Departure_Time_From_Source": "07:30",
//     "Source": "Swargate, Pune",
//     "Destination": "Sangli",
//     "Source_Latitude": "16.8524",
//     "Source_Longitude": "74.5815",
//     "Destination_Latitude": "16.8524",
//     "Destination_Longitude": "74.5815",
//     "Cost": "515",
//     "From": "Pune",
//     "To": "Sangli"
//   },
//   {
//     "id": "MSRTC - 741800",
//     "Name": "MSRTC - 741800",
//     "TotalTime": "04h 20m",
//     "Arrival_Time_At_Destination": "17:20",
//     "Departure_Time_From_Source": "13:00",
//     "Source": "Swargate, Pune",
//     "Destination": "Sangli",
//     "Source_Latitude": "16.8524",
//     "Source_Longitude": "74.5815",
//     "Destination_Latitude": "16.8524",
//     "Destination_Longitude": "74.5815",
//     "Cost": "515",
//     "From": "Pune",
//     "To": "Sangli"
//   }
// ]