import { Alert, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import React, { useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { SCREEN } from '@/types/screen';

export default function _logout() {
    const [modalVisible, setModalVisible] = useState(Boolean);
    const nav = useNavigation();

    const handleLogin = () => {
        Alert.alert("Você saiu do sistema! Obrigado(a).")
        setModalVisible(false)
        nav.navigate(SCREEN.LOGIN);
    }

    const handleHome = () => {
        setModalVisible(false);
        nav.navigate(SCREEN._HOME);
    }

    return (
        <View style={styles.container}>
            <Modal visible={modalVisible} transparent={true}>
                <View style={styles.content}>
                    <View style={styles.card}>
                        <Text style={styles.textStyle}>Logout</Text>
                        <Text style={styles.desc}>Deseja sair do SIGA?
                        </Text>
                        <TouchableOpacity style={[
                            styles.button,
                            {
                                width: '100%',
                                marginTop: 24,
                                backgroundColor: '#709BEF'
                            }
                        ]} onPress={handleLogin}>
                            <Text style={styles.buttonText}>Sair</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[
                            styles.button,
                            {
                                width: '100%',
                                marginTop: 24,
                                backgroundColor: '#EF7070'
                            }
                        ]} onPress={handleHome}>
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                <Text style={styles.textStyle}>Clique aqui para sair do SIGA</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    desc: {
        fontSize: 16,
        lineHeight: 20,
        opacity: 0.7
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
    },
    card: {
        width: "90%",
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 8
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 15,
        bottom: 2
    },
    button: {
        width: "90%",
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        borderRadius: 8,
    },
    textStyle: {
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10,
    },
});