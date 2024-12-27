import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome'; // Corrigido para a importação correta
import { Link } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Simula a autenticação
    if (email === 'usuario@teste.com' && password === '123456') {
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
    } else {
      Alert.alert('Erro', 'E-mail ou senha inválidos.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/LogoAzullogo.png')} style={styles.logo}/>
      
      <View style={styles.inputContainer}>
        <Icon name="user" size={28} color="#aaa" style={styles.icon}/>
        <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      </View>
      
      <View style={styles.inputContainer}>
        <Icon name="lock" size={30} color="#aaa" style={styles.icon}/>
        <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      </View>
      <Link href={"/"} style={styles.forgotPassword}>Esqueceu a senha?</Link>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 50,
    borderRadius: 100,
    marginBottom: 15,
    backgroundColor: '#E1E4EA',
    paddingLeft: 20, 
    paddingRight: 15, 
  },
  icon: {
    marginRight: 20,
    color: '#709BEF'
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: 'transparent',
    borderRadius: 100,
    fontSize: 16,
  },
  button: {
    width: '90%',
    height: 55,
    backgroundColor: '#709BEF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  forgotPassword: {
    color: '#709BEF',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});