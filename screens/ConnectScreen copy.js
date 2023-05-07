import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import AppStyle from "../AppStyle.js";

export default function ConnectScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPress = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("HomeScreen");
    } catch (error) {
      Alert.alert("Erreur", error.message);
    }
  };

  return (
    <View style={AppStyle.container}>
      <Text style={AppStyle.title}>Connectez-vous</Text>
      <TextInput
        style={AppStyle.textInput}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={AppStyle.textInput}
        placeholder="Mot de passe"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={AppStyle.button} onPress={onLoginPress}>
        <Text style={AppStyle.buttonText}>Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
}
