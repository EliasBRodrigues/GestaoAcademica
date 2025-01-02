import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Link } from 'expo-router';

export default function _forgot() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email === '' || password === '') {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        if (email === 'user' && password === '123') {
            Alert.alert('Sucesso', 'Login realizado com sucesso!');
        } else {
            Alert.alert('Erro', 'E-mail ou senha inválidos.');
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/images/LogoAzullogo.png')} style={styles.logo} />
            <Text style={styles.titleContainer}>Digite um email válido para recuperar a senha</Text>
            <View style={styles.inputContainer}>
                <Icon name="user" size={28} color="#aaa" style={styles.icon} />
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
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
            <Link href={"/(tabs)/(student)/_home"} style={styles.forgotPassword}>Voltar</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        bottom: 100,
        color: 'red'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 15,
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
        bottom: 50,
        borderColor: '#E1E4EA'
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
        borderColor: '#E1E4EA'

    },
    button: {
        width: '90%',
        height: 55,
        backgroundColor: '#709BEF',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 50,
    },
    logo: {
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 100,
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
        bottom: 0,
        top: 10
    },
});
