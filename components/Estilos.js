import { StyleSheet } from "react-native";

slide_container = () => {};

const Estilos = StyleSheet.create({
  container_bigger: {
    flex: 1,
    backgroundColor: "#00151b"
  },

  color1: {
    backgroundColor: "#00151b"
  },
  color2: {
    backgroundColor: "#002832"
  },
  color3: {
    backgroundColor: "#0062AA"
  },

  container: {
    alignItems: "flex-start",
    backgroundColor: "#f1f1f1",
    margin: 10,
    borderRadius: 30
  },

  planosInfo: {
    backgroundColor: "red",
    margin: 10
  },

  planosAberto: {
    marginLeft: 40,
    margin: 10
  },

  texto: {
    color: "#fff"
  },

  planosFexado: {
    backgroundColor: "blue",
    margin: 10
  },

  posicaoSwitchers: {
    margin: 10
  },

  nameSwitchers: {
    margin: 10
  },

  textSwitchers: {
    fontSize: 20,
    color: "#0062AA",
    fontWeight: "bold"
  },

  nameAndSwitchers: {
    flexDirection: "row",
    margin: 10
  },

  botaoPlanos: {
    color: "blue",
    width: 260,
    height: 50,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50
  }
});

export default Estilos;
