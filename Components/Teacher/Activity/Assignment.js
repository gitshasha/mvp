import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Assignment() {
  return (
    <View style={{ alignItems: "center" }}>
      <View style={styles.cont1}>
        <Text>Assignments</Text>
        <Text></Text>
      </View>
      <View style={styles.cont2}>
        <View style={styles.eachbox}>
          <Text>Quiz</Text>
        </View>
        <View style={styles.eachbox}>
          <Text>PRojects</Text>
        </View>
        <View style={styles.eachbox}>
          <Text>Notifications</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cont1: {
    height: 100,
    margin: 40,
    width: 330,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: "red",
  },
  cont2: {
    height: 400,
    width: 330,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  eachbox: {
    height: 120,
    width: 120,
    backgroundColor: "pink",
    borderRadius: 10,
    margin: 10,
  },
});
