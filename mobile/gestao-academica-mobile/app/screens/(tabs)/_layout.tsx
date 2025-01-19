import { StyleSheet, View, Text } from 'react-native'
import React from 'react';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { SCREEN } from '@/types/screen';
import StackNavigation from '@/app/navigation';
import _forgot from './(login)/_forgot';

const Drawer = createDrawerNavigator();
export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer.Navigator
        screenOptions={{
          drawerPosition: "left",
          drawerType: "front",
          drawerActiveTintColor: '#709BEF',
          drawerStyle: {
            backgroundColor: 'white',
            width: 300
          },
          headerShown: true,
          headerStyle: {
            height: 70,
            backgroundColor: '#709BEF',
          },
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
                  height: 200,
                  width: "100%",
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#021520',
                  paddingBottom: 12
                }}>
                  <Icon name="user" size={28} color="#aaa" style={styles.icon} />
                  <Text style={{
                    fontSize: 22,
                    color: 'white',
                    fontWeight: 'bold',
                    marginVertical: 10
                  }}>User user user</Text>
                </View>
                <DrawerItemList {...props} />
              </SafeAreaView>
            )
          }
        }
      >
        <Drawer.Screen
          name={SCREEN._HOME}
          component={StackNavigation}
          options={{
            title: "Home",
            drawerLabel: "Home",
            drawerIcon: () => (
              <Icon name="home" size={28} color="#aaa" style={styles.icon} />
            )
          }}
        >
        </Drawer.Screen>
        <Drawer.Screen
          component={_forgot}
          name={SCREEN.FORGOT}
          options={{
            title: "Forgot",
            drawerLabel: "Forgot",
            drawerIcon: () => (
              <Icon name="gear" size={28} color="#aaa" style={styles.icon} />
            )
          }}
        >
        </Drawer.Screen>
        {/* <Drawer.Screen
          name="(component)/_caution"
          options={{
            title: "Avisos",
            drawerLabel: "Avisos",
            drawerIcon: () => (
              <Icon name="thumb-tack" size={28} color="#aaa" style={styles.icon} />
            )
          }}
        >
        </Drawer.Screen>
        <Drawer.Screen
          name="(login)/_logout"
          options={{
            title: "Logout",
            drawerLabel: "Logout",
            drawerIcon: () => (
              <Icon name="sign-out" size={28} color="#aaa" style={styles.icon} />
            )
          }}
        >
        </Drawer.Screen> */}
      </Drawer.Navigator>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 20,
    color: '#709BEF'
  }
});