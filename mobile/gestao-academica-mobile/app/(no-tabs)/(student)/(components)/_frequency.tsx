import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRouter } from 'expo-router';
import LinkButton from '@/components/ExternalLink';

export default function Frequency() {
  const router = useRouter();
  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const subjects = ['IoT', 'PM', 'BD', 'AI', 'SE'];

  return (
    <View style={styles.container}>
      <View style={styles.link}>
        <LinkButton href="../../../(tabs)/(student)/_home" iconName="chevron-left" size={32} color="white" />
      </View>
      {/* Componente de Menu Hambúrguer */}
      <View style={styles.firstContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#709BEF" />
        <Text style={styles.text}>Frequência</Text>
      </View>

      <View style={styles.secondContainer}>
        {/* Primeira linha de botões */}
        {/* Tabela com MATERIA, PRESENÇA e FALTAS */}
        <View style={styles.table}>
          {/* Cabeçalho */}
          <View style={styles.tableRow}>
            <Text style={styles.headerText}>MATERIA</Text>
            <View style={styles.verticalLine}></View>
            <Text style={styles.headerText}>PRESENÇA</Text>
            <View style={styles.verticalLine}></View>
            <Text style={styles.headerText}>FALTAS</Text>
          </View>

          {/* Linhas de dados */}
          {subjects.map((subject, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.cellText}>{subject}</Text>
              <View style={styles.verticalLine}></View>
              <Text style={styles.cellText}>{getRandomInt(10, 20)}</Text>
              <View style={styles.verticalLine}></View>
              <Text style={styles.cellText}>{getRandomInt(0, 5)}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.caution}>Obs: Caso atinja um percentual acima de 25% na matéria será reprovado por falta na matéria.</Text>
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
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  text: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: '600',
    bottom: 15,
  },
  caution: {
    fontSize: 15,
    color: 'black',
    fontWeight: '400',
    top: 15,
  },
  scrollContainer: {
    flex: 1,
  },
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#709BEF',
    borderRadius: 10,
    marginTop: 20,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#709BEF',
    height: 40,
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
});