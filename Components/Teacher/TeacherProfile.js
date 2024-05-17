import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function TeacherProfile() {
  return (
    <View style={[styles.flexer2, { backgroundColor: "lightgray", height:680 }]}>
      <View style={[styles.cont1, styles.flexer2]}>
        <View
          style={{
            height: 130,
            width: 130,
            borderRadius: 65,
            backgroundColor: "pink",
          }}
        ></View>

        <Text style={{ fontSize: 30, fontWeight: "500" }}>Senku</Text>
      </View>
      <View style={[styles.cont2, styles.flexer2]}>
        <TouchableOpacity style={styles.link}>
          <Text style={{ fontSize: 15, fontWeight: "400",fontFamily:"" }}>Classes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.link]}>
          <Text style={{ fontSize: 15, fontWeight: "400" }}>Salary</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.link}>
          <Text style={{ fontSize: 15, fontWeight: "400" }}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <Text style={{ fontSize: 15, fontWeight: "400" }}>Assignment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <Text style={{ fontSize: 15, fontWeight: "400" }}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  flexer: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  flexer2: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
  },
  cont1: {
    height: 200,
    width: 330,
  },
  cont2: {
    height: 380,
    width: 330,
    backgroundColor:"red"
  },
  link: {
    height: 50,
    width: 300,
  },
});
