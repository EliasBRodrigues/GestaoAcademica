import { StyleSheet, View, Text } from 'react-native'
import React, { useState } from 'react';
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome6";
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerItemList } from '@react-navigation/drawer';
import { Link } from 'expo-router';

export default function Layout(){
  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{ 
          drawerPosition: "left", 
          drawerType: "front", 
          drawerActiveTintColor: '#709BEF',
          drawerStyle: {
            backgroundColor: 'white',
            width: 250
          },
          headerShown: true,
          drawerInactiveTintColor: '#709BEF',
          drawerLabelStyle: {
            color: '#709BEF'
          }
        }}
        drawerContent={
          (props) => {
            return (
              <SafeAreaView>
                <View style={{ 
                  height:200, 
                  width: "100%",
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#021520',
                  paddingBottom: 12
                }}>
                <Icon name="user" size={28} color="#aaa" style={styles.icon} /> 
                {/* <Text style={{
                  fontSize: 22,
                  color: 'white',
                  fontWeight:'bold',
                  marginVertical: 10
                }}>User user user</Text> */}
                </View>
                <DrawerItemList {...props}/>
              </SafeAreaView>
            )
          }
        }
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "SIGA",
            drawerLabel: "SIGA",
            drawerIcon: ()=>(
                <Icon name="user" size={28} color="#aaa" style={styles.icon} /> 
            )
          }}
        >
        </Drawer.Screen>
        <Drawer.Screen
          name="(tabs)/(login)/_logout"
          options={{
            title: "Logout",
            drawerLabel: "Logout",
            drawerIcon: ()=>(
                <Icon name="user" size={28} color="#aaa" style={styles.icon} /> 
            )
          }}
        >
        </Drawer.Screen>
        <Drawer.Screen
          name="(tabs)/(login)/login"
          options={{
            title: "Login",
            drawerLabel: "Login",
            drawerIcon: ()=>(
                <Icon name="user" size={28} color="#aaa" style={styles.icon} /> 
            )
          }}
        >
        </Drawer.Screen>
        <Drawer.Screen
          name="(tabs)/(student)/_home"
          options={{
            title: "Home",
            drawerLabel: "Home",
            drawerIcon: ()=>(
                <Icon name="user" size={28} color="#aaa" style={styles.icon} /> 
            )
          }}
        >
        </Drawer.Screen>
        <Drawer.Screen
          name="(tabs)/(login)/_forgot"
          options={{
            title: "Forgot",
            drawerLabel: "Forgot",
            drawerIcon: ()=>(
                <Icon name="user" size={28} color="#aaa" style={styles.icon} /> 
            )
          }}
        >
        </Drawer.Screen>
      </Drawer>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
    icon: {
        marginRight: 20,
        color: '#709BEF'
    }
});