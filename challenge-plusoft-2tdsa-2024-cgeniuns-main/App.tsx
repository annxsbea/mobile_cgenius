import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Constants from "expo-constants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./Pages/Home/Home";
import ProfileScreen from "./Pages/Profile/Profile";
import DetailsClientScreen from "./Pages/DetailsClient";
import SignInScreen from "./Pages/SignIn/SignInScreen";
import SignUpScreen from "./Pages/SignUp/index";
import SearchScreen from './Pages/Search';
import { AtendenteResponse } from "./@types/apis";
import { getData } from "./hooks";
import Logo from "./Componentes/imagens/Fundo2";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: "#000",
            borderBottomWidth: 0,
          },
          headerTitle: () => (
            <View style={{}}>
              <Logo />
            </View>
          ),
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="DetailsClient"
        component={DetailsClientScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  const [userLogged, setUserLogged] = React.useState<AtendenteResponse | null>(
    null
  );

  const getUserfromStorage = async () => {
    const get = await getData();
    setUserLogged(get);
  };

  React.useEffect(() => {
    getUserfromStorage();
  }, []);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {userLogged ? (
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: "#8841AF",
              tabBarStyle: {
                backgroundColor: "#190225",
                borderTopWidth: 0,
              },
            }}
          >
            <Tab.Screen
              name="MainStack"
              component={MainStack}
              options={{
                headerShown: false,
                tabBarLabel: "",

                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" size={size} color={color} />
                ),
              }}
              initialParams={{ setUserLogged, userLogged }}
            />
            <Tab.Screen
              name="Search"
              component={SearchScreen}
              options={{
                headerShown: false,
                tabBarLabel: "",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="search" size={size} color={color} />
                ),
              }}
            />

            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                headerShown: false,
                tabBarLabel: "",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="person" size={size} color={color} />
                ),
              }}
              initialParams={{ setUserLogged, userLogged }}
            />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="SignIn" options={{ headerShown: false }}>
              {(props) => (
                <SignInScreen {...props} setUserLogged={setUserLogged} />
              )}
            </Stack.Screen>
            <Stack.Screen name="SignUp" options={{ headerShown: false }}>
              {(props) => (
                <SignUpScreen {...props} setUserLogged={setUserLogged} />
              )}
            </Stack.Screen>
          </Stack.Navigator>
        )}
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#000",
  },
});
