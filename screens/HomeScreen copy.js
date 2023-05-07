import React from "react";
import { View, Text } from "react-native";
import AppStyle from "../AppStyle.js";

export default function HomeScreen() {
  return (
    <View style={AppStyle.container}>
      <Text style={AppStyle.title}>Accueil</Text>
    </View>
  );
}
