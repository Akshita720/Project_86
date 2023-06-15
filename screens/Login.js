import React, { Component } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  Text
} from "react-native";


import { RFValue } from "react-native-responsive-fontsize";

import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();


const appIcon = require("../assets/logo.png");

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      userSignedIn: false
    };
  }


  signIn = async (email, password) => {
    firebase
    .auth()
    .signInWithEmailAndPassword(email,password)
    .then(()=>{
      this.props.navigation.replace("Dashboard")
    })
    .catch(Error=> {
      Alert.alert("error")
    })
  };


  render() {
    
      const { email, password } = this.state;

      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />

          <Text style={styles.appTitleText}>Spectaram</Text>
          <Image source={appIcon} style={styles.appIcon} />

          <TextInput
            style={styles.textinput}
            onChangeText={text => this.setState({ email: text })}
            placeholder={"Enter Email"}
            placeholderTextColor={"#FFFFFF"}
            autoFocus
          />
          <TextInput
            style={[styles.textinput, { marginTop: 20 }]}
            onChangeText={text => this.setState({ password: text })}
            placeholder={"Enter Password"}
            placeholderTextColor={"#FFFFFF"}
            secureTextEntry
          />
          <TouchableOpacity
            style={[styles.button, { marginTop: 20 }]}
            onPress={()=>this.signIn(email,password)}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          
        <TouchableOpacity
            onPress={()=>this.props.navigation.replace("Register")}
          >
            <Text style={styles.buttonTextNewUser}>New User</Text>
          </TouchableOpacity>
        </View>
      );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1284ab",
    alignItems: "center",
    justifyContent: "center"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appIcon: {
    width: RFValue(200),
    height: RFValue(200),
    resizeMode: "contain",
    marginBottom: RFValue(20)
  },
  appTitleText: {
    color: "white",
    textAlign: "center",
    fontSize: RFValue(40),
    marginBottom: RFValue(20)
  },
  textinput: {
    width: RFValue(250),
    height: RFValue(50),
    padding: RFValue(10),
    borderColor: "#FFFFFF",
    borderWidth: RFValue(4),
    borderRadius: RFValue(10),
    fontSize: RFValue(20),
    color: "#f7f757",
    backgroundColor: "#ae22e6"
  },
  button: {
    width: RFValue(250),
    height: RFValue(50),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: RFValue(30),
    backgroundColor: "white",
    marginBottom: RFValue(20),

  },
  buttonText: {
    fontSize: RFValue(24),
    color:"#4911ac"
  },
    buttonTextNewUser: {
    fontSize: RFValue(12),
    color: "#FFFFFF",
    textDecorationLine: 'underline'
  }
});

