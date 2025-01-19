import React from 'react';
import { Image, StyleSheet } from "react-native";

export default function ImageProfile() {
    return (
        <Image source={require('../assets/images/fotoPerfilprofile.png')} style={styles.logo} />
    )
}

const styles = StyleSheet.create({
    logo: {
        bottom: 10,
    },
})