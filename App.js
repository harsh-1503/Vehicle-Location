import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TextInput} from 'react-native';
// import SvgUrl from 
export default function App() {
  // const Input=({labe})
  return (
    <View style={styles.container} >
      
      <View style={styles.rating}>
        {/* <Image source={require('./my-icon.jpg')} /> */}
      </View>
      <TextInput placeholder='Enter first location' onChangeText={(e)=>console.warn(e) }  style={{fontSize:20,borderColor: '#000000',borderWidth: 3,padding: 10,borderRadius: 10,margin: 10,width: '90%'}}></TextInput>
      <TextInput placeholder='Enter first location' onChangeText={(e)=>console.warn(e) }  style={{fontSize:20,borderColor: '#000000',borderWidth: 3,padding: 10,borderRadius: 10,margin: 10,width: '90%'}}></TextInput>
      
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 60,

  }
  
});
