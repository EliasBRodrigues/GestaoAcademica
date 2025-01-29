import api from '@/services/api';
import { Grade } from '@/services/types/Grade';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text , View } from 'react-native';

export default function Horary() {

  const [grade, setGrade] = useState<Grade | null>(null);

  const fetchGradeHorary = async () => {
    try {
      const res = await api.get<Grade>(`/api/grades/1`);
      setGrade(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGradeHorary();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.link} />
      <View style={styles.scrollContainer}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.secondContainer}>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.headerText}>SIGLA</Text>
                <View style={styles.verticalLine}></View>
                <Text style={styles.headerText}>DISCIPLINA</Text>
              </View>
              {(grade ? [
                { sigla: grade.sigla, horario: grade.nameGrade },
                { sigla: grade.sigla, horario: grade.nameGrade },
                { sigla: grade.sigla, horario: grade.nameGrade },
                { sigla: grade.sigla, horario: grade.nameGrade },
              ] : []).map((item, idx) => (
                <View key={idx} style={styles.tableRow2}>
                  <Text style={styles.cellText}>{item.sigla}</Text>
                  <View style={styles.verticalLine}></View>
                  <Text style={styles.cellText}>{item.horario}</Text>
                </View>
              ))}
            </View>
            <View style={styles.row}>
              {["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"].map((dia, index) => (
                <View key={index} style={styles.dayBox}>
                  <Text style={styles.dayText}>{dia}</Text>
                  <View style={styles.table2}>
                    {(grade ? [
                      { sigla: grade.sigla, horario: "18:30-19:30" },
                      { sigla: grade.sigla, horario: "18:30-19:30" },
                      { sigla: grade.sigla, horario: "18:30-19:30" },
                    ] : []).map((item, idx) => (
                      <View key={idx} style={styles.tableRow2}>
                        <Text style={styles.cellText}>{item.sigla}</Text>
                        <View style={styles.verticalLine}></View>
                        <Text style={styles.cellText}>{item.horario}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  link: {
    position: 'relative', top: 10, left: 10, padding: 20,
  },
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#709BEF',
    borderRadius: 10,
    marginTop: 5,
  },
  table2: {
    width: '120%',
    borderWidth: 1,
    borderColor: '#709BEF',
    borderRadius: 10,
    marginTop: 5,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomColor: '#709BEF',
    height: 40,
  },
  tableRow2: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomColor: '#709BEF',
    height: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#709BEF',
  },
  firstContainer: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#709BEF',
  },
  secondContainer: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 30,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  text: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: '600',
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
    marginBottom: 10,
    marginTop: 10,
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
    fontSize: 10
  },
  verticalLine: {
    width: 1,
    height: '100%',
    backgroundColor: '#709BEF',
  },
  dayBox: {
    borderColor: '#709BEF',
    backgroundColor: '#fff',
    width: '45%',
    padding: 8,
    marginHorizontal: 5,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 12,
  },
  dayText: {
    fontWeight: '600',
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  scheduleBox: {
    marginBottom: 5,
  },
  scheduleText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
  scrollView: {
    paddingBottom: 0,
  },
  scrollContainer: {
    flex: 1,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    overflow: 'hidden',
  }
});