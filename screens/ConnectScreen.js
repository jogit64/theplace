import React from "react";
import { View, Text } from "react-native";
import AppStyle from "../AppStyle.js"; // importer les styles depuis votre fichier AppStyle.js

export default function ConnectScreen() {
  return (
    <View style={AppStyle.container}>
      <Text style={AppStyle.title}>Connectez-vous</Text>
    </View>
  );
}
