import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { initializeApp } from "firebase/app";

import { View, Text, TouchableOpacity, Image } from "react-native";
import AppStyle from "./AppStyle.js";

import ConnectScreen from "./screens/ConnectScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";

import "./firebaseConfig"; // Importez ici le fichier firebaseConfig.js

const Stack = createStackNavigator();

function AppContent({ navigation }) {
  return (
    <View style={AppStyle.container}>
      <Text style={AppStyle.title}>The Place</Text>
      <Text style={AppStyle.sstitle}>Bienvenue !</Text>
      <Image source={require("./assets/profil.png")} style={AppStyle.logo} />

      <TouchableOpacity
        style={AppStyle.button}
        onPress={() => navigation.navigate("ConnectScreen")}
      >
        <Text style={AppStyle.buttonText}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={AppStyle.button}
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        <Text style={AppStyle.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={AppContent} />
        <Stack.Screen name="ConnectScreen" component={ConnectScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
