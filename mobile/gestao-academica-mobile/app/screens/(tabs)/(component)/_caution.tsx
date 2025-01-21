import React from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRouter } from 'expo-router';
import LinkButton from '@/components/ExternalLink';

const _caution: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.link}>
            </View>
            <View style={styles.firstContainer}>
                <StatusBar barStyle="light-content" backgroundColor="#709BEF" />
                <Text style={styles.text}>Avisos</Text>
            </View>
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.secondContainer}>
                    <View style={styles.tableRow}>
                        <Text style={styles.mainText}>Janeiro</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.subText}>ATENÇÃO!  ALUNOS DO 4º e 5º SEMESTRE  (TURMA D.S.M.)</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.subText}>Encaminhar até o dia 15/01/20254 em Arquivo PDF, a CERTIDÃO DE NASCIMENTO ou CERTIDÃO DE CASAMENTO, para o e-mail f299acad@cps.sp.gov.br</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.subText}>01-Confraternização Universal - Feriado Nacional</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.subText}>09 -Abertura do Edital para Vagas Remanescentes e Transferências</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.subText}>13 a 19- Período das inscrições para vagas remanescentes e transferências (EDITAL)</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.subText}>20 - Previsão de divulgação do Resultado  Final do Provão Paulista</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.subText}>20 - Previsão de divulgação da 1ª Lista de Chamada – Provão Paulista</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.subText}>21 - Resultado do Edital para Vagas Remanescentes e Transferências</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.subText}>27 - Previsão de divulgação da 2ª Lista de Chamada – Provão Paulista</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.subText}>27 a 31- Matrícula dos candidatos aprovados no Edital de Vagas Remanescentes e Transferências</Text>
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.subText}>28 e 29- Matrícula do Programa A.M.S.</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    link: {
        position: 'relative',
        top: 10,
        left: 10,
        padding: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#709BEF',
    },
    firstContainer: {
        flex: .1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#709BEF',
    },
    secondContainer: {
        flex: 1,  
        backgroundColor: '#fff',
        justifyContent: 'flex-start',  
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 30,
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
    tableRow: {
        flexDirection: 'row',  
        justifyContent: 'space-between', 
        width: '100%', 
        marginBottom: 10,  
        paddingHorizontal: 20, 
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
        width: 135,
        height: 150,
        backgroundColor: '#709BEF',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
        top: 20,
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
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
});

export default _caution;