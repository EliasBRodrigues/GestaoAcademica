import React, { useEffect, useState } from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from 'expo-router';
import { SCREEN } from '@/types/screen';
import ImageProfile from '@/components/ImageProfile';
import api from '@/services/api';
import { User } from '@/services/types/User';

export default function Home() {
  const nav = useNavigation();
  const [user, setUser] = useState<User | null>(null);
  const studentId = 1;
    const fetchUser = async () => {
        try {
            const response = await api.get<User>(`/api/students/${studentId}`);
            setUser(response.data);
        } catch (error) {
            console.error('error:', error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#709BEF" />
        <ImageProfile />
        <Text style={styles.text}>{user?.name}</Text>
        <Text style={styles.text}>{user?.email}</Text>
        <Text style={styles.text}>{user?.ra}</Text>
      </View>
      <View style={styles.secondContainer}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => nav.navigate(SCREEN.REGISTRATION)}>
            <Icon name="id-card" size={55} color="#aaa" style={styles.icon} />
            <Text style={styles.buttonText}>Matrícula</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => nav.navigate(SCREEN.TIME)}>
            <Icon name="clock" size={55} color="#aaa" style={styles.icon} />
            <Text style={styles.buttonText}>Horários</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => nav.navigate(SCREEN.NOTES)}>
            <Icon name="graduation-cap" size={55} color="#aaa" style={styles.icon} />
            <Text style={styles.buttonText}>Boletim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => nav.navigate(SCREEN.FREQUENCY)}>
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
  text: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: '600',
    top: 5
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '80%',
  },
});
