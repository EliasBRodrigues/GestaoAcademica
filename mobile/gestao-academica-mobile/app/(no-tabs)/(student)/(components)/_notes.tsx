import React from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useRouter } from 'expo-router';
import LinkButton from '@/components/ExternalLink';



const Notes: React.FC = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.link}>
        <LinkButton href="../../../(tabs)/(student)/_home" iconName="chevron-left" size={32} color="white" />
      </View>      
      <View style={styles.firstContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#709BEF" />
        <Text style={styles.text}>Boletim</Text>
      </View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.secondContainer}>
          <View style={styles.tableRow}>
            <Text style={styles.mainText}>Internet das coisas</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Atividade 1</Text>
            <Text style={styles.note}>8.5</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Atividade 2</Text>
            <Text style={styles.note}>9.0</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Projeto Integrador</Text>
            <Text style={styles.note}>7.5</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Avaliação Integradora</Text>
            <Text style={styles.note}>8.0</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Maratona de Programação</Text>
            <Text style={styles.note}>10.0</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.mainText}>Internet das coisas</Text>
            <Text style={styles.note}>8.5</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Atividade 1</Text>
            <Text style={styles.note}>8.5</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Atividade 2</Text>
            <Text style={styles.note}>9.0</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Projeto Integrador</Text>
            <Text style={styles.note}>7.5</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Avaliação Integradora</Text>
            <Text style={styles.note}>8.0</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Maratona de Programação</Text>
            <Text style={styles.note}>10.0</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.mainText}>Internet das coisas</Text>
            <Text style={styles.note}>8.5</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Atividade 1</Text>
            <Text style={styles.note}>8.5</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Atividade 2</Text>
            <Text style={styles.note}>9.0</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Projeto Integrador</Text>
            <Text style={styles.note}>7.5</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Avaliação Integradora</Text>
            <Text style={styles.note}>8.0</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Maratona de Programação</Text>
            <Text style={styles.note}>10.0</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.mainText}>Internet das coisas</Text>
            <Text style={styles.note}>8.5</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Atividade 1</Text>
            <Text style={styles.note}>8.5</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Atividade 2</Text>
            <Text style={styles.note}>9.0</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Projeto Integrador</Text>
            <Text style={styles.note}>7.5</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Avaliação Integradora</Text>
            <Text style={styles.note}>8.0</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Maratona de Programação</Text>
            <Text style={styles.note}>10.0</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.mainText}>Internet das coisas</Text>
            <Text style={styles.note}>8.5</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Atividade 1</Text>
            <Text style={styles.note}>8.5</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Atividade 2</Text>
            <Text style={styles.note}>9.0</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Projeto Integrador</Text>
            <Text style={styles.note}>7.5</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Avaliação Integradora</Text>
            <Text style={styles.note}>8.0</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Maratona de Programação</Text>
            <Text style={styles.note}>10.0</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.mainText}>Internet das coisas</Text>
            <Text style={styles.note}>8.5</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Atividade 1</Text>
            <Text style={styles.note}>8.5</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Atividade 2</Text>
            <Text style={styles.note}>9.0</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Projeto Integrador</Text>
            <Text style={styles.note}>7.5</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Avaliação Integradora</Text>
            <Text style={styles.note}>8.0</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.subText}>Maratona de Programação</Text>
            <Text style={styles.note}>10.0</Text>
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
    flex: 1,  // Ajustei para flex 1 para ocupar toda a tela
    backgroundColor: '#709BEF',
    marginBottom: 30
  },
  firstContainer: {
    flex: .1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#709BEF',
  },
  secondContainer: {
    flex: 1,  // Ajustado para flex 1 para ocupar o restante da tela, dentro do ScrollView
    backgroundColor: '#fff',
    justifyContent: 'flex-start',  // Ajustado para garantir que o conteúdo comece do topo
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
  mainText: {
    fontSize: 28,  // Maior tamanho de fonte
    color: '#709BEF',
    fontWeight: '700',
    textAlign: 'left',
    width: '100%',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',  // Usado para alinhar os textos e notas em linha
    justifyContent: 'space-between',  // Espaça os itens (deixando os textos à esquerda e notas à direita)
    width: '100%',  // Ocupa toda a largura disponível
    marginBottom: 10,  // Espaçamento entre as linhas
    paddingHorizontal: 20,  // Para garantir que o conteúdo não toque as bordas
  },
  subText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'left',  // Alinha os textos à esquerda
    width: '70%',  // Deixa o texto à esquerda ocupar 70% da linha
  },
  note: {
    fontSize: 16,
    color: 'black',
    textAlign: 'right',  // Alinha as notas à direita
    width: '30%',  // Deixa a nota ocupar 30% da linha
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
    flex: 1,  // Permite que o ScrollView ocupe o espaço restante
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});

export default Notes;