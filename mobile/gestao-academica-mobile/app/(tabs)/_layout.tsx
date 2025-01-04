import { StyleSheet, View, Text } from 'react-native'
import React from 'react';
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerItemList } from '@react-navigation/drawer';

export default function Layout() {
  return (
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
          name="(student)/_home"
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
          name="(login)/_forgot"
          options={{
            title: "Forgot",
            drawerLabel: "Forgot",
            drawerIcon: () => (
              <Icon name="gear" size={28} color="#aaa" style={styles.icon} />
            )
          }}
        >
        </Drawer.Screen>
        <Drawer.Screen
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

// import { View, Text, StyleSheet, Image } from "react-native";
// import React, { useEffect } from "react";
// import { Drawer } from "expo-router/drawer";
// import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
// import {
//   Feather,
//   AntDesign,
//   MaterialIcons,
//   Ionicons,
// } from "@expo/vector-icons";
// import { router, usePathname } from "expo-router";

// const CustomDrawerContent = (props: any) => {
//   const pathname = usePathname();

//   useEffect(() => {
//     console.log(pathname);
//   }, [pathname]);

//   return (
//     <DrawerContentScrollView {...props}>
      
//       <View style={styles.userInfoWrapper}>
//         <Image
//           source={{ uri: "https://randomuser.me/api/portraits/women/26.jpg" }}
//           width={80}
//           height={80}
//           style={styles.userImg}
//         />
//         <View style={styles.userDetailsWrapper}>
//           <Text style={styles.userName}>John Doe</Text>
//           <Text style={styles.userEmail}>john@email.com</Text>
//         </View>
//       </View>
//       <DrawerItem
//         icon={({ color, size }) => (
//           <Feather
//             name="list"
//             size={size}
//             color={pathname == "/app/(tabs)/(student)/(components)/_frequency" ? "#fff" : "#000"}
//           />
//         )}
//         label={"Home"}
//         labelStyle={[
//           styles.navItemLabel,
//           { color: pathname == "/feed" ? "#fff" : "#000" },
//         ]}
//         style={{ backgroundColor: pathname == "/feed" ? "#333" : "#fff" }}
//         onPress={() => {
//           router.push("/(tabs)/(student)/_home");
//         }}
//       />
//       <DrawerItem
//         icon={({ color, size }) => (
//           <Feather
//             name="list"
//             size={size}
//             color={pathname == "/app/(tabs)/(student)/(components)/_home" ? "#fff" : "#000"}
//           />
//         )}
//         label={"Home"}
//         labelStyle={[
//           styles.navItemLabel,
//           { color: pathname == "/feed" ? "#fff" : "#000" },
//         ]}
//         style={{ backgroundColor: pathname == "/feed" ? "#333" : "#fff" }}
//         onPress={() => {
//           router.push("/(tabs)/(student)/_home");
//         }}
//       />
//     </DrawerContentScrollView>
//   );
// };


// const styles = StyleSheet.create({
//   navItemLabel: {
//     marginLeft: -20,
//     fontSize: 18,
//   },
//   userInfoWrapper: {
//     flexDirection: "row",
//     paddingHorizontal: 10,
//     paddingVertical: 20,
//     borderBottomColor: "#ccc",
//     borderBottomWidth: 1,
//     marginBottom: 10,
//   },
//   userImg: {
//     borderRadius: 40,
//   },
//   userDetailsWrapper: {
//     marginTop: 25,
//     marginLeft: 10,
//   },
//   userName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   userEmail: {
//     fontSize:16,
//     fontStyle: 'italic',
//     textDecorationLine: 'underline',
//   }
// });