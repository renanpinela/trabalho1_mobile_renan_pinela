import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import React from "react";
import { styles } from './styles';
import logo from './src/img/logo.png'

const image = {uri: 'https://cdn.wallpapersafari.com/53/88/SBpLfJ.jpg'}

const App = () => {
  return (
    <View style={styles.container1}>
      <ImageBackground source={image} style={styles.container}>
      <Text style={styles.title1}>Welcome back!</Text>
      <Text style={styles.title2}>We're so excited to see you again!</Text>

      <Text style={styles.textAcc}>ACCOUNT INFORMATION</Text>
      <TextInput
      style={styles.input}
      onChangeText={()=>{}}
      placeholderTextColor='#555'
      placeholder="E-mail or Phone Number"
      />
      <TextInput
      secureTextEntry={true}
      style={styles.input}
      onChangeText={()=>{}}
      placeholderTextColor='#555'
      placeholder="Password"
      />

      <Text style={styles.textBlue}>Forgot your password?</Text>
      <Text style={styles.textBlue}>Use a password manager?</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      {/* <Image source={logo} style={styles.logo}/>   Remove comment to see the logo of my fav RPG 'Ogre Battle 64'*/}

      </ImageBackground>
    </View>
  );
}

export default App
