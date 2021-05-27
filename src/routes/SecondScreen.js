/* eslint-disable react/display-name */
import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import SecondScreen from '../screens/SecondScreen'

const Stack = createStackNavigator();

export default function HomeStack() {
  
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SecondScreen"
        component={SecondScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* Add more stack here */}
    </Stack.Navigator>
  );
}
