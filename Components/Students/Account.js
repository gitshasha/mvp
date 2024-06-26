import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'

export default function Account() {
  return (
    <View style={[styles.flexer2, { backgroundColor: "grey", flex: 1 }]}>
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
          <Text style={{ fontSize: 20, fontWeight: "500" }}>Classes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.link]}>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>Report</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.link}>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>Attendance</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>Admission</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <Text style={{ fontSize: 20, fontWeight: "500" }}>Log out</Text>
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
    backgroundColor: "red",
  },
  cont2: {
    height: 400,
    width: 330,
    backgroundColor: "blue",
  },
  link: {
    height: 50,
    width: 330,
    backgroundColor: "pink",
    alignItems:"flex-start",justifyContent:"space-evenly"
  },
});