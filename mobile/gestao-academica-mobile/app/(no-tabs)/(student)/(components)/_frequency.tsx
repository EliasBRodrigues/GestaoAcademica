import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRouter } from 'expo-router';
import LinkButton from '@/components/ExternalLink';

export default function Frequency() {
  const router = useRouter();
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
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    position: 'relative', top: 10,  left: 10, padding: 20,
  },
  container: {
    flex: 0.5,
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
    bottom: 15
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
