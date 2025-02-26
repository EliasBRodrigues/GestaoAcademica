import { StyleSheet, View, Text } from 'react-native'
import React from 'react';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { SCREEN } from '@/types/screen';
import StackNavigation from '@/app/navigation';
import _forgot from './screens/(tabs)/(login)/_forgot';
import _caution from './screens/(tabs)/(component)/_caution';
import _logout from './screens/(tabs)/(login)/_logout';
import Login from './auth/login';
// import { AuthProvider } from '@/hooks/AuthContext';

const Drawer = createDrawerNavigator();
export default function Layout() {
  return (
    // <AuthProvider>
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
            headerShown: false,
            headerStyle: {
              height: 70,
              backgroundColor: '#709BEF',
            },
            drawerInactiveTintColor: '#709BEF',
            drawerLabelStyle: {
              color: '#709BEF'
            },
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
            name={SCREEN.LOGIN}
            component={Login}
            options={{
              headerShown: false,
              drawerLabel: () => null,
              drawerItemStyle: { display: 'none' }
            }}
          >
          </Drawer.Screen>
          <Drawer.Screen
            name={SCREEN.Home}
            component={StackNavigation}
            options={{
              headerShown: true,
              title: "SIGA",
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
              headerShown: true,
              title: "Forgot",
              drawerLabel: "Forgot",
              drawerIcon: () => (
                <Icon name="gear" size={28} color="#aaa" style={styles.icon} />
              )
            }}
          >
          </Drawer.Screen>
          <Drawer.Screen
            component={_caution}
            name="(component)/_caution"
            options={{
              headerShown: true,
              title: "Avisos",
              drawerLabel: "Avisos",
              drawerIcon: () => (
                <Icon name="thumb-tack" size={28} color="#aaa" style={styles.icon} />
              )
            }}
          >
          </Drawer.Screen>
          <Drawer.Screen
            component={_logout}
            name="(login)/_logout"
            options={{
              headerShown: true,
              title: "Logout",
              drawerLabel: "Logout",
              drawerIcon: () => (
                <Icon name="sign-out" size={28} color="#aaa" style={styles.icon} />
              )
            }}
          >
          </Drawer.Screen>
        </Drawer.Navigator>
      </GestureHandlerRootView>
    // </AuthProvider>
  )
}

const styles = StyleSheet.create({
  icon: {
    marginRight: 20,
    color: '#709BEF'
  }
});