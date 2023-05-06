import { StyleSheet } from "react-native";

const AppStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  sstitle: {
    color: "#ffffff",
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#4d4dff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    width: 235,
    marginBottom: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    width: 125,
    height: 125,
    resizeMode: "contain",
    marginBottom: 50,
    marginTop: 50,
  },
});

export default AppStyle;
