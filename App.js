import React, { useState, useEffect } from "react";
import { View, Text, AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// components
import Home from "./src/routes/HomeStack";
import TabNav from './src/routes/TabNav'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"Nav"}
        screenOptions={{
          headerShown: false,
        }}
        >
        <Stack.Screen name="Nav">
            {(props) => <TabNav {...props} />}
          </Stack.Screen>

        <Stack.Screen name="Home">
          {props => <Home {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent("template", () => App);
