import React from 'react';
import { Image, StyleSheet } from "react-native";

export default function Logo() {
  return (
    <Image source={require('../assets/images/LogoAzullogo.png')} style={styles.logo} />
  )
}

const styles = StyleSheet.create({
  logo: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
})