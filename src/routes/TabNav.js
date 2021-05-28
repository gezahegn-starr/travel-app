/* eslint-disable react/display-name */
import React from "react";
import { StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import ExplorePage from '../screens/ExplorePage'
import LikesPage from '../screens/Likespage'
import ChartsPage from '../screens/ChartsPage'

// components
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "black",
        showIcon: true,
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                style={[styles.home, focused ? styles.selceted : {}]}
                source={require("../../assets/icons/home.png")}

              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Explor"
        component={ExplorePage}
        options={{
          // tabBarLabel: "SecondScreen",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Image
                style={[styles.home, focused ? styles.selceted : {}]}
                source={require("../../assets/icons/explor.png")}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Heart"
        component={LikesPage}
        options={{
          // tabBarLabel: "SecondScreen",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Image
                style={[styles.home, focused ? styles.selceted : {}]}
                source={require("../../assets/icons/heart.png")}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="charts"
        component={ChartsPage}
        options={{
          // tabBarLabel: "SecondScreen",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Image
                style={[styles.home, focused ? styles.selceted : {}]}
                // style={styles.selceted}
                source={require("../../assets/icons/charts.png")}
              />
            );
          },
        }}
      />

      {/* more tabs */}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  home: {
    height: 20,
    width: 20,
    marginTop: "auto",
    marginBottom: "auto",
  },
  selceted:{
    tintColor:'#20b08f'
  },
  notSelected:{
    tintColor:'black'
  }
});
