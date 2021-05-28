/* eslint-disable react/display-name */
import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Header from '../screens/Header'
import {colors} from '../shared/global'

const Stack = createStackNavigator();

export default function HomeStack() {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          title: <Header />,
          headerStyle: {
            backgroundColor: colors.background,
            borderWidth: 0,
            width: '100%',
            height: 100
          },
          styles:{
            width: '100%',
            height: 20
          }
        }}
      />
      {/* Add more stack here */}
    </Stack.Navigator>
  );
}
