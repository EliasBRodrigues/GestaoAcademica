import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from 'expo-router';
export default function _home() {
    return (
        <View style={styles.container}>
            <View style={styles.firstContainer}>
                <Link href={"/_forgot"} style={styles.forgotPassword}>Esqueceu a senha?</Link>
            </View>
            <View style={styles.secondContainer}>
                <Text style={styles.text}>Conteúdo adicional aqui!</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#709BEF',
    },
    firstContainer: { // BLUE
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#709BEF',
    },
    secondContainer: { // WHITE
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 0, 
        borderBottomRightRadius: 0,
    },
    forgotPassword: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    text: {
        fontSize: 18,
        color: '#000',
        fontWeight: '500',
    }
});