import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,   
    TouchableOpacity,
    TextInput, Image
} from 'react-native';
// import CheckBox from "expo-checkbox";

const Login = () => {
    const [agree, setAgree]=useState(false);

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.mainHeader}>Login Page </Text>
            <Text style={styles.description}>Please login to stay connected! </Text>

            <View style={styles.inputcontainer}>
                <Text style={styles.labels}>Enter your name</Text>
                <TextInput style={styles.inputStyle}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
            </View>
            <View style={styles.inputcontainer}>
                <Text style={styles.labels}>Enter your password</Text>
                <TextInput style={styles.inputStyle}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                />
            </View>
            <View  style={styles.wrapper}>
                <Text style={styles.wrapperText}>I have agreed to the terms and conditions</Text>
                <TouchableOpacity style={[styles.buttonStyle,
                {
                    backgroundColor: agree? "#000000" : "#ffffff"
                },
                ]}
                disabled={!agree}>
                    <Text style={styles.wrapperText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Login
const styles = StyleSheet.create({
    container: {
        height: 80,
        alignItems: 'center',
        // height: '100%', width: '100%' 
    },

    mainContainer:{
        height:"100%",
        paddingHorizontal: 30,
        paddingTop:30
    },
});