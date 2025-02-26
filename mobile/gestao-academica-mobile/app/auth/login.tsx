import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "expo-router";
import Logo from "@/components/Logo";
import LoadAnimation from "@/components/LoadAnimation";
import { SCREEN } from "@/types/screen";

export default function Login() {
  const nav = useNavigation();

  // const Auth = useAuth();
  // const isLoggedIn = Auth.userIsAuthenticated();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    if (username === 'user' && password === '123') {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        nav.navigate(SCREEN.Home);
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
      }, 2000);
    } else {
      Alert.alert('Erro', 'E-mail ou senha inválidos.');
    }
  };

  return (
    <View style={styles.container}>
      <LoadAnimation isLoading={isLoading} />
      <Logo />
      <View style={styles.inputContainer}>
        <Icon name="user" size={28} color="#aaa" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={30} color="#aaa" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    height: 50,
    borderRadius: 100,
    marginBottom: 15,
    backgroundColor: "#E1E4EA",
    paddingLeft: 20,
    paddingRight: 15,
    borderColor: "#E1E4EA",
  },
  icon: {
    marginRight: 20,
    color: "#709BEF",
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: "#E1E4EA",
    borderRadius: 100,
    fontSize: 16,
    borderColor: "#E1E4EA",
  },
  button: {
    width: "90%",
    height: 57,
    backgroundColor: "#709BEF",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});
