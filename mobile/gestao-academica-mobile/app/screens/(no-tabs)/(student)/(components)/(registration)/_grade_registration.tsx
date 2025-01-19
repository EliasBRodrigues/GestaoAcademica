import React, { useState } from 'react';
import { Alert, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinkButton from '@/components/ExternalLink';
import { useNavigation, useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { SCREEN } from '@/types/screen';

type Semester = 'dsm1' | 'dsm2' | 'dsm3' | 'dsm4' | 'dsm5' | 'dsm6';
type Subject = {
    nome: string;
    quant: string;
    modelo: string;
};

export default function _grade_registration() {
    const nav = useNavigation();
    const handleRegistration = () => {
        Alert.alert('Concluído', 'Cadastro de semestre realizado com sucesso!');
        nav.navigate(SCREEN._HOME);
    };

    const [selected, setSelected] = useState<Semester | undefined>();
    const isSemesterSelected = selected !== undefined;
    const [randomData, setRandomData] = useState<string | Subject[] | null>(null);
    const generateRandomData = (semester: Semester) => {
        const data = {
            not: [
                {
                    nome: '',
                    quant: '',
                    modelo: ''
                },
            ],
            dsm1: [
                {
                    nome: 'Modelagem de Banco de Dados',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Desenvolvimento Web I',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Algoritmo e Lógica de Programação',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Engenharia de Software I',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Design Digital',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Sistemas Operacionais e Redes de Computaores',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
            ],
            dsm2: [
                {
                    nome: 'Modelagem de Banco de Dados',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Desenvolvimento Web I',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Algoritmo e Lógica de Programação',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Engenharia de Software I',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Design Digital',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Sistemas Operacionais e Redes de Computaores',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
            ],
            dsm3: [
                {
                    nome: 'Modelagem de Banco de Dados',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Desenvolvimento Web I',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Algoritmo e Lógica de Programação',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Engenharia de Software I',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Design Digital',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Sistemas Operacionais e Redes de Computaores',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
            ],
            dsm4: [
                {
                    nome: 'Modelagem de Banco de Dados',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Desenvolvimento Web I',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Algoritmo e Lógica de Programação',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Engenharia de Software I',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Design Digital',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Sistemas Operacionais e Redes de Computaores',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
            ],
            dsm5: [
                {
                    nome: 'Modelagem de Banco de Dados',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Desenvolvimento Web I',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Algoritmo e Lógica de Programação',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Engenharia de Software I',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Design Digital',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Sistemas Operacionais e Redes de Computaores',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
            ],
            dsm6: [
                {
                    nome: 'Modelagem de Banco de Dados',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Desenvolvimento Web I',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Algoritmo e Lógica de Programação',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Engenharia de Software I',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Design Digital',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
                {
                    nome: 'Sistemas Operacionais e Redes de Computaores',
                    quant: '80 aulas',
                    modelo: 'Presencial'
                },
            ],
        };

        return data[semester];
    };

    const handlePickerChange = (item: Semester) => {
        setSelected(item);
        const data = generateRandomData(item);
        setRandomData(data);
    };

    return (
        <View style={styles.container}>
            <View style={styles.link}>
                {/* <LinkButton href="../../../(tabs)/(student)/_home" iconName="chevron-left" size={32} color="white" /> */}
            </View>
            <View style={styles.firstContainer}>
                {/* <StatusBar barStyle="light-content" backgroundColor="#709BEF" /> */}
                {/* <Text style={styles.text}>Matrícula</Text> */}
            </View>
            <View style={styles.secondContainer}>
                <View style={styles.tableRow}>
                    <Text style={styles.mainText}>Selecione o semestre</Text>
                </View>
                <Picker
                    selectedValue={selected}
                    onValueChange={(item: Semester) => handlePickerChange(item)}
                    style={styles.picker}
                >
                    <Picker.Item label="" value="not" />
                    <Picker.Item label="1° SEMESTRE" value="dsm1" />
                    <Picker.Item label="2° SEMESTRE" value="dsm2" />
                    <Picker.Item label="3° SEMESTRE" value="dsm3" />
                    <Picker.Item label="4° SEMESTRE" value="dsm4" />
                    <Picker.Item label="5° SEMESTRE" value="dsm5" />
                    <Picker.Item label="6° SEMESTRE" value="dsm6" />
                </Picker>
                <ScrollView style={styles.scrollContainer}>
                    {randomData && (
                        <View style={styles.infoContainer}>
                            {Array.isArray(randomData) ? (
                                randomData.map((item, index) => (
                                    <View key={index} style={styles.card}>
                                        <Text style={styles.cardTitle}>{item.nome}</Text>
                                        <Text>{`Quantidade de aulas: ${item.quant}`}</Text>
                                        <Text>{`Modelo: ${item.modelo}`}</Text>
                                    </View>
                                ))
                            ) : (
                                <Text style={styles.randomDataText}>{randomData}</Text>
                            )}
                        </View>
                    )}
                </ScrollView>
                <TouchableOpacity
                    style={[styles.button, !isSemesterSelected && styles.buttonDisabled]}
                    onPress={isSemesterSelected ? handleRegistration : undefined}
                    disabled={!isSemesterSelected}
                >
                    <Text style={styles.buttonText}>Matrícula</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    link: {
        position: 'relative',
        top: 10,
        left: 10,
        padding: 20,
    },
    buttonDisabled: {
        backgroundColor: '#D3D3D3',
    },
    buttonTextDisabled: {
        color: '#A9A9A9',
    },
    table: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#709BEF',
        borderRadius: 10,
        marginTop: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    tableMargin: {
        marginTop: 20,
    },
    headerText: {
        flex: 1,
        textAlign: 'center',
        fontWeight: '700',
        color: 'black',
    },
    cellText: {
        flex: 1,
        textAlign: 'center',
        color: 'black',
    },
    verticalLine: {
        width: 1,
        height: '100%',
        backgroundColor: '#709BEF',
    },
    container: {
        flex: 1,
        backgroundColor: '#709BEF',
    },
    firstContainer: {
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#709BEF',
    },
    secondContainer: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 30,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    text: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: '600',
        bottom: 15,
    },
    mainText: {
        fontSize: 28,
        color: '#709BEF',
        fontWeight: '700',
        textAlign: 'left',
        width: '100%',
        marginBottom: 10,
    },
    mainText2: {
        fontSize: 25,
        color: '#709BEF',
        fontWeight: '700',
        textAlign: 'left',
        width: '100%',
        marginBottom: 10,
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
    },
    subText: {
        fontSize: 16,
        color: 'black',
        textAlign: 'left',
        width: '70%',
    },
    note: {
        fontSize: 16,
        color: 'black',
        textAlign: 'right',
        width: '30%',
    },
    button: {
        width: '100%',
        height: 57,
        backgroundColor: '#709BEF',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 35,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
    },
    icon: {
        color: '#fff',
    },
    row: {
        bottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
        width: '80%',
    },
    scrollContainer: {
        flex: 1,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    picker: {
        height: 50,
        width: '80%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        backgroundColor: '#fff',
        marginVertical: 20,
        paddingLeft: 10,
        fontSize: 16,
    },
    infoContainer: {
        marginTop: 20,
        padding: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    randomDataText: {
        fontSize: 16,
        color: '#333',
    },
    card: {
        backgroundColor: '#fff',
        padding: 16,
        marginBottom: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});