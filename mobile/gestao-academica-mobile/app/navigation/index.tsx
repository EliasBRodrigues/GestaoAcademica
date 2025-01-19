import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { SCREEN } from '../../types/screen';
import { RootStack } from '@/types/types';
import _home from '../screens/(tabs)/(student)/_home';
import Registration from '../screens/(no-tabs)/(student)/(components)/_registration';
import Notes from '../screens/(no-tabs)/(student)/(components)/_notes';
import Horary from '../screens/(no-tabs)/(student)/(components)/_time';
import Frequency from '../screens/(no-tabs)/(student)/(components)/_frequency';
import _grade_registration from '../screens/(no-tabs)/(student)/(components)/(registration)/_grade_registration';
import _forgot from '../screens/(tabs)/(login)/_forgot';

const Stack = createNativeStackNavigator<RootStack>();
const StackNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen component={_home} name={SCREEN._HOME} options={{headerShown: false}}/>
        <Stack.Screen component={Registration} name={SCREEN.REGISTRATION} options={{ title: 'Matrícula', headerStyle: { backgroundColor: '#709BEF' }, headerTintColor: 'white'}}/>
        <Stack.Screen component={Notes} name={SCREEN.NOTES} options={{ title: 'Boletim', headerStyle: { backgroundColor: '#709BEF' }, headerTintColor: 'white'}}/>
        <Stack.Screen component={Horary} name={SCREEN.TIME} options={{ title: 'Horários', headerStyle: { backgroundColor: '#709BEF' }, headerTintColor: 'white'}}/>
        <Stack.Screen component={Frequency} name={SCREEN.FREQUENCY} options={{ title: 'Frequência', headerStyle: { backgroundColor: '#709BEF' }, headerTintColor: 'white'}}/>
        <Stack.Screen component={_grade_registration} name={SCREEN._GRADE_REGISTRATION} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default StackNavigation;