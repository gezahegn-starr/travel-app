import React from "react";
import { View, ActivityIndicator, Text, StyleSheet } from "react-native";

export default function Home(props) {
  return (
    <View style={styles.welcome}>
      <Text>Welcome to your second screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',

  },
});
