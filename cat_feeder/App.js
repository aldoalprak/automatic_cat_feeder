import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import HomeScreen from "./src/containers/Home";
import ModeScreen from "./src/containers/Mode";
import SideBar from "./src/components/Sidebar";
import NotificationScreen from "./src/containers/Notifications.js";


const RootStack = createDrawerNavigator(
  {
    Dashboard: { screen: HomeScreen },
    Mode: { screen: ModeScreen },
    Notifications: { screen: NotificationScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
