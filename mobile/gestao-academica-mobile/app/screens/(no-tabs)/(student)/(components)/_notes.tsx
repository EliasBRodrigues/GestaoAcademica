import api from '@/services/api';
import { GradeNotes } from '@/services/types/GradeNotes';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Notes() {
  const [randomData, setRandomData] = useState<string | GradeNotes[] | null>(null);
  const noteId = 1;

  const fetchNotes = async () => {
    try {
      const res = await api.get(`http://localhost:8080/api/gradesNotes/${noteId}`);
      setRandomData(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchNotes();
  }, [])


  return (
    <View style={styles.container}>
      <View style={styles.firstContainer} />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.secondContainer}>
          {randomData && Array.isArray(randomData) ? (
            randomData.map((item, idx) => (
              <>
                <View style={styles.tableRow}>
                  <Text key={idx} style={styles.mainText}>{item.subject}</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.subText}>Atividade 1</Text>
                  <Text style={styles.note}>{item.atividade_um}</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.subText}>Atividade 2</Text>
                  <Text style={styles.note}>{item.atividade_dois}</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.subText}>Projeto Integrador</Text>
                  <Text style={styles.note}>{item.projeto_integrador}</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.subText}>Avaliação Integradora</Text>
                  <Text style={styles.note}>{item.avaliacao_integradora}</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={styles.subText}>Maratona de Programação</Text>
                  <Text style={styles.note}>{0}</Text>
                </View>
                <View style={styles.tableRow}>
                  <Text style={{ fontWeight: 'bold' }}>Media</Text>
                  <Text style={{ fontWeight: 'bold' }}>{item.media}</Text>
                </View>

              </>
            ))
          ) : (
            <Text>{randomData}</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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

