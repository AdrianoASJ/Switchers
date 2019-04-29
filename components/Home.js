import React, { Component } from "react";
import { View, Switch, Text } from "react-native";
import { Constants } from "expo";
import Estilos from "./Estilos";

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
      <View style={Estilos.container_bigger}>
        <View style={Estilos.container}>
          <View style={Estilos.nameAndSwitchers}>
            <Switch
              style={Estilos.posicaoSwitchers}
              onValueChange={this._handleToggleSwitch}
              value={this.state.switchValue}
            />
            <View style={Estilos.nameSwitchers}>
              <Text style={Estilos.textSwitchers}>Plano Ouro</Text>
            </View>
          </View>

          <View style={Estilos.nameAndSwitchers}>
            <Switch
              style={Estilos.posicaoSwitchers}
              onValueChange={this._handleToggleSwitch2}
              value={this.state.switchValue2}
            />

            <View style={Estilos.nameSwitchers}>
              <Text style={Estilos.textSwitchers}>Plano Prata</Text>
            </View>
          </View>

          <View style={Estilos.nameAndSwitchers}>
            <Switch
              style={Estilos.posicaoSwitchers}
              onValueChange={this._handleToggleSwitch3}
              value={this.state.switchValue3}
            />

            <View style={Estilos.nameSwitchers}>
              <Text style={Estilos.textSwitchers}>Plano Bronze</Text>
            </View>
          </View>
          <View>
            {this.state.switchValue ? (
              <View style={Estilos.planosAberto}>
                <Text>
                  Plano Ouro, Faça aquilo que ama quando você menos notar vai
                  estar ganhando oque realmente merece{" "}
                </Text>
              </View>
            ) : null}
          </View>
          <View>
            {this.state.switchValue2 ? (
              <View style={Estilos.planosAberto}>
                <Text>
                  Plata ou Plumo, Procure expandir seus horizontes, novas
                  tecnoligias nova culturas
                </Text>
              </View>
            ) : null}
          </View>
          <View>
            {this.state.switchValue3 ? (
              <View style={Estilos.planosAberto}>
                <Text>Plano Bronze, Be Strong</Text>
              </View>
            ) : null}
          </View>
        </View>
      </View>
    );
  }
}
