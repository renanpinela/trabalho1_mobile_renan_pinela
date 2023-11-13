import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useEffect, useState } from "react";
import { styles } from './styles';

const image = {uri: 'https://cdn.wallpapersafari.com/53/88/SBpLfJ.jpg'}

const App = () => {
  return (
    <View style={styles.container1}>
      <ImageBackground source={image} resizeMode="cover" style={styles.container}>
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
      </ImageBackground>
    </View>
  );
}

export default App
