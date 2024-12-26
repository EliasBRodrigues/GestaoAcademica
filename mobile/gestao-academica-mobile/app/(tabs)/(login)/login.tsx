import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { Link } from "expo-router";
import { useState } from "react";

export default function Login() {
  const [text, setText] = useState('')

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Image source={require('../../../assets/images/LogoAzullogo.png')} style={styles.svg} />
        <View style={styles.form}>
          <TextInput value={text} onChangeText={setText} style={styles.input} />
          <TextInput value={text} onChangeText={setText} style={styles.input} />
          <Link href={"/"} style={styles.link}>Esqueceu a senha?</Link>
          <View style={styles.button}>
            <Button
              title="Login"
              color="#709BEF"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 20
  },
  link: {
    top: 100,
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    top: 100,
    flexDirection: 'column',
    alignItems: 'center',
  },
  svg: {
    width: 272,
    height: 184,
    top: 120,
    left: 38,
  },
  form: {
    gap: 5,
    padding: 15
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 57,
    width: 312,
    marginBottom: 15,
    padding: 10,
    top: 120,
    borderRadius: 35,
    backgroundColor: '#E1E4EA'
  },
});