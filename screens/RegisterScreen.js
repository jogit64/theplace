import React from "react";
import { View, Text } from "react-native";
import AppStyle from "../AppStyle.js"; // importer les styles depuis votre fichier AppStyle.js

export default function RegisterScreen() {
  return (
    <View style={AppStyle.container}>
      <Text style={AppStyle.title}>Inscrivez-vous</Text>
    </View>
  );
}
