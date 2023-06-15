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

export default class RegisterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name:"",
      last_name:"",
      email: "",
      password: "",
      confirm_password:""
    };
  }
  

  registerUser = (email,password,confirm_password,first_name,last_name) => {
    if(password==confirm_password){
    firebase
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .then((userCredential)=>{
      Alert.alert("User is registered")
      console.log(userCredential.user.uid)
      this.props.navigation.replace("Login")
      firebase.database().ref("/users/" + userCredential.user.uid)
      .set({
        email:userCredential.user.email,
        first_name:first_name,
        last_name:last_name,
      })
    })
    .catch(Error=> {
      Alert.alert("error")
    })
    }
    else{
      Alert.alert("Passwords do not match")
    }
  }


  render() {      
    const { email, password} = this.state;

      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />

          <Text style={styles.appTitleText}>Register</Text>

          
          <TextInput
            style={styles.textinput}
            onChangeText={text => this.setState({ first_name: text })}
            placeholder={"First Name"}
            placeholderTextColor={"#FFFFFF"}

          />

          <TextInput
            style={styles.textinput}
            onChangeText={text => this.setState({ last_name: text })}
            placeholder={"Last Name"}
            placeholderTextColor={"#FFFFFF"}

          />


          <TextInput
            style={styles.textinput}
            onChangeText={text => this.setState({ email: text })}
            placeholder={"Enter Email"}
            placeholderTextColor={"#FFFFFF"}

          />
          <TextInput
            style={styles.textinput}
            onChangeText={text => this.setState({ password: text })}
            placeholder={"Enter Password"}
            placeholderTextColor={"#FFFFFF"}
            secureTextEntry
          />

          <TextInput
            style={styles.textinput}
            onChangeText={text => this.setState({ confirm_password: text })}
            placeholder={"Renter Password"}
            placeholderTextColor={"#FFFFFF"}
                secureTextEntry

          />
          <TouchableOpacity
            style={[styles.button, { marginTop: 20 }]}
            onPress={()=>this.registerUser(email,password,confirm_password,first_name,last_name)}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={()=>this.props.navigation.replace("Login")}>
          <Text style={styles.buttonTextNewUser}>Login</Text>
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
    marginVertical:RFValue(20),
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
