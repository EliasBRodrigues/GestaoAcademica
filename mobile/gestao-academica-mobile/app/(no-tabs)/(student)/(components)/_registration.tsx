import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LinkButton from '@/components/ExternalLink';

export default function Registration() {
  const handleLogin = () => {
    //Alert.alert('Sucesso', 'Login realizado com sucesso!');
    //router.push("/(tabs)/(student)/_home")
  };
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  const checkButtonState = () => {
    const randomCondition = Math.random() < 0.5;
    setIsButtonEnabled(randomCondition);
  };

  useEffect(() => {
    checkButtonState();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.link}>
        <LinkButton href="../../../(tabs)/(student)/_home" iconName="chevron-left" size={32} color="white" />
      </View>
      <View style={styles.firstContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#709BEF" />
        <Text style={styles.text}>Matrícula</Text>
      </View>
      <View style={styles.secondContainer}>
        <View style={styles.tableRow}>
          <Text style={styles.mainText}>Fulano de Ciclano Beltrano</Text>
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.mainText2}>Ciclo: 6</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.mainText}>Rendimento no curso</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>PP</Text>
            <Text style={styles.note}>84,84%</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>PP(Intercâmbio)</Text>
            <Text style={styles.note}>67.34%</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>PR</Text>
            <Text style={styles.note}>8.34</Text>
          </View>
        </View>
        <View style={[styles.table, styles.tableMargin]}>
          <View style={styles.tableRow}>
            <Text style={styles.mainText}>Prazo de Integralização</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Cursado</Text>
            <Text style={styles.note}>4</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Máximo</Text>
            <Text style={styles.note}>10</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Faltam</Text>
            <Text style={styles.note}>6</Text>
          </View>
        </View>
        <TouchableOpacity  style={[styles.button, !isButtonEnabled && styles.buttonDisabled]} onPress={isButtonEnabled ? handleLogin : undefined} disabled={!isButtonEnabled} >
          <Text style={[styles.buttonText, !isButtonEnabled && styles.buttonTextDisabled]}>Matrícula</Text>
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
    marginBottom: 30,
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
    justifyContent: 'flex-start',
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
    width: '70%',
    height: 57,
    backgroundColor: '#709BEF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30, 
    marginBottom: 20, 
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
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});