import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import React from "react";
import { styles } from './styles2';
import logo_alelo from './src/img/alelo_logo0.png';

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={logo_alelo}/>

      <Text style={styles.textAcc}>Login</Text>
      <TextInput
      style={styles.input}
      onChangeText={()=>{}}
      placeholderTextColor='#555'
      placeholder="Digite o seu CPF"
      keyboardType='numeric'
      />
      <TextInput
      secureTextEntry={true}
      style={styles.input}
      onChangeText={()=>{}}
      placeholderTextColor='#555'
      placeholder="Senha"
      />

      <Text style={styles.textGreen}>Esqueci minha senha</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>

    </View>
  );
}

export default App;