import api from '@/services/api';
import { GradeNotes } from '@/services/types/GradeNotes';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Notes() {
  const [randomData, setRandomData] = useState<string | GradeNotes[] | null>(null);
  const noteId = 1;

  const fetchNotes = async () => {
    try {
      const res = await api.get(`http://localhost:8080/api/grades/notes/${noteId}`);
      setRandomData(res.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchNotes();
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.link} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.secondContainer}>
          {randomData && Array.isArray(randomData) ? (
            randomData.map((item, idx) => (
              <React.Fragment key={idx}>
                <View style={styles.tableRow}>
                  <Text style={styles.mainText}>{item.subject}</Text>
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
              </React.Fragment>
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
  link: {
    position: 'relative', top: 10, left: 10, padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#709BEF',
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  secondContainer: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 30,
  },
  mainText: {
    fontSize: 28,
    color: '#709BEF',
    fontWeight: '700',
    textAlign: 'left',
    width: '100%',
    marginBottom: 5,
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
});