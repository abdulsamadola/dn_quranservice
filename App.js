import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import { Root, Container } from "native-base";

import { createStackNavigator } from "react-navigation";
import Initiatives from "./src/screens/initiatives";
import SideBar from "./src/screens/sidebar";
import About from "./src/screens/About";
import Index from "./index";
const AppNavigator = createStackNavigator({
  IndexScreen: { screen: Index },
  SideScreen: { screen: SideBar },
  InitScreen: { screen: Initiatives },
  AboutScreen: { screen: About }
});

console.disableYellowBox = true;

export default class App extends Component {
  state = {
    fontLoaded: false
  };

  async componentWillMount() {
    Promise.all([
      Asset.loadAsync([
        require("./assets/icon.png"),
        require("./assets/splash.png"),
        require("./src/images/dn.png"),
        require("./src/images/mp3.gif")
      ])
    ]),
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
      });
    this.setState({
      fontLoaded: true
    });
  }

  render() {
    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }

    return (
      <Root>
        <Container
          style={{
            paddingTop:
              Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight
          }}
        >
          <AppNavigator />
        </Container>
      </Root>
    );
  }
}
