import Layout from '@/app/_layout';
import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function _home() {
  return (
    <View style={styles.container}>
      {/* Componente de Menu Hambúrguer */}
      <View style={styles.firstContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#709BEF" />
        <Image source={require('../../../assets/images/fotoPerfilprofile.png')} style={styles.logo} />
        <Text style={styles.text}>Fulano Ciclano Beltrano</Text>
        <Text style={styles.text}>fulano@facul.sp.gov.br</Text>
        <Text style={styles.text}>RA: 1234</Text>
      </View>

      <View style={styles.secondContainer}>
        {/* Primeira linha de botões */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Icon name="id-card" size={55} color="#aaa" style={styles.icon} />
            <Text style={styles.buttonText}>Matrícula</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="clock" size={55} color="#aaa" style={styles.icon} />
            <Text style={styles.buttonText}>Horários</Text>
          </TouchableOpacity>
        </View>

        {/* Segunda linha de botões */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Icon name="graduation-cap" size={55} color="#aaa" style={styles.icon} />
            <Text style={styles.buttonText}>Boletim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Icon name="check-square" size={55} color="#aaa" style={styles.icon} />
            <Text style={styles.buttonText}>Frequência</Text>
          </TouchableOpacity>
        </View>
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
    flex: 1.6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  logo: {
    top: 1,
  },
  text: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: '600',
    top: 15
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
    top: 20
  },
  icon: {
    color: '#fff'
  },
  row: {
    bottom: 30,
    flexDirection: 'row', // Para exibir os botões lado a lado
    justifyContent: 'space-between', // Espalha as caixas igualmente
    marginBottom: 20, // Espaçamento entre as linhas
    width: '80%', // Defina a largura das linhas para que fiquem dentro da tela
  },
});
