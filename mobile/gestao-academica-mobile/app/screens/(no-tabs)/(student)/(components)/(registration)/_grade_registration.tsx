import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinkButton from '@/components/ExternalLink';
import { useNavigation, useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { SCREEN } from '@/types/screen';
import { Semester } from '@/services/types/Semester';
import { Classroom } from '@/services/types/Classroom';
import api from '@/services/api';
import axios from 'axios';

export default function GradeRegistration() {
    const nav = useNavigation();
    const handleRegistration = () => {
        Alert.alert('Concluído', 'Cadastro de semestre realizado com sucesso!');
        nav.navigate(SCREEN.Home);
    };

    const [selected, setSelected] = useState<Semester | undefined>();
    const isSemesterSelected = selected !== undefined;
    const [randomData, setRandomData] = useState<string | Classroom[] | null>(null);

    const fetchGradesForSemester = async (semester: string) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/classrooms/${semester}`);
            if (response.data) {
                setRandomData(response.data);
            }
        } catch (error) {
            console.error('Erro ao buscar as matérias', error);
            setRandomData('Erro ao carregar as matérias');
        }
    };

    const handlePickerChange = (item: string) => {
        setSelected({ nameClass: item });
        fetchGradesForSemester(item);
    };

    useEffect(() => {
        fetchGradesForSemester("");
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.secondContainer}>
                <Text style={styles.mainText}>Selecione o semestre</Text>
                <Picker
                    selectedValue={selected?.nameClass}
                    onValueChange={(item: string) => handlePickerChange(item)}
                    style={styles.picker}
                >
                    <Picker.Item label="1° SEMESTRE" value="DSM_1"/>
                    <Picker.Item label="2° SEMESTRE" value="DSM_2" />
                    <Picker.Item label="3° SEMESTRE" value="DSM_3" />
                    <Picker.Item label="4° SEMESTRE" value="DSM_4" />
                    <Picker.Item label="5° SEMESTRE" value="DSM_5" />
                    <Picker.Item label="6° SEMESTRE" value="DSM_6" />
                </Picker>

                <ScrollView style={styles.scrollContainer}>
                    {randomData && Array.isArray(randomData) ? (
                        randomData.map((item, index) => (
                            <View key={index} style={styles.card}>
                                <Text style={styles.cardTitle}>{item.grade.nameGrade}</Text>
                                <Text>{`Quantidade de aulas: ${item.grade.subjectHours}`}</Text>
                                <Text>{`Modelo: ${item.grade.subjectFormatClass}`}</Text>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.randomDataText}>{randomData}</Text>
                    )}
                </ScrollView>
                <TouchableOpacity
                    style={[styles.button, !isSemesterSelected && styles.buttonDisabled]}
                    disabled={!isSemesterSelected} onPress={handleRegistration}
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