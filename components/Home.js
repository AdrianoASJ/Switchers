import React, { Component } from "react";
import { View, StyleSheet, Switch, Text } from "react-native";
import { Constants } from "expo";

export default class Home extends Component {
  state = {
    switchValue: false,
    switchValue2: false,
    switchValue3: false
  };

  _handleToggleSwitch = () =>
    this.setState(state => ({
      switchValue: !state.switchValue,
      switchValue2: (state.switchValue2 = false),
      switchValue3: (state.switchValue3 = false)
    }));

  _handleToggleSwitch2 = () =>
    this.setState(state => ({
      switchValue2: !state.switchValue2,
      switchValue: (state.switchValue = false),
      switchValue3: (state.switchValue3 = false)
    }));

  _handleToggleSwitch3 = () =>
    this.setState(state => ({
      switchValue3: !state.switchValue3,
      switchValue: (state.switchValue = false),
      switchValue2: (state.switchValue2 = false)
    }));

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nameAndSwitchers}>
          <Switch
            style={styles.posicaoSwitchers}
            onValueChange={this._handleToggleSwitch}
            value={this.state.switchValue}
          />
          <View style={styles.nameSwitchers}>
            <Text style={styles.textSwitchers}>Plano A</Text>
          </View>
        </View>

        <View style={styles.nameAndSwitchers}>
          <Switch
            style={styles.posicaoSwitchers}
            onValueChange={this._handleToggleSwitch2}
            value={this.state.switchValue2}
          />

          <View style={styles.nameSwitchers}>
            <Text style={styles.textSwitchers}>Plano B</Text>
          </View>
        </View>

        <View style={styles.nameAndSwitchers}>
          <Switch
            style={styles.posicaoSwitchers}
            onValueChange={this._handleToggleSwitch3}
            value={this.state.switchValue3}
          />

          <View style={styles.nameSwitchers}>
            <Text style={styles.textSwitchers}>Plano C</Text>
          </View>
        </View>
        <View>
          {this.state.switchValue ? (
            <View style={styles.planosAberto}>
              <Text>Mateus</Text>
            </View>
          ) : null}
        </View>
        <View>
          {this.state.switchValue2 ? (
            <View style={styles.planosAberto}>
              <Text>é</Text>
            </View>
          ) : null}
        </View>
        <View>
          {this.state.switchValue3 ? (
            <View style={styles.planosAberto}>
              <Text>Bitchola</Text>
            </View>
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#f1f1f1"
  },

  planosInfo: {
    backgroundColor: "red",
    margin: 10
  },

  planosAberto: {
    backgroundColor: "red",
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
    color: "red",
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
