import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Notes: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer} />
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
    flex: 1,  
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
    flex: 1,  
    backgroundColor: '#fff',
    justifyContent: 'flex-start', 
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

export default Notes;