import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";
import Nav from "./Nav";
export default function StudentDashboard() {
  const navigation = useNavigation();
  const img = {
    uri: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?w=826&t=st=1711365764~exp=1711366364~hmac=05b90c901280897564f9750114251b0c3061c47317562de6de51ef5102425b68",
  };
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "center" }}>
      
        <View style={styles.container}>
          <View style={[styles.profile]}>
            <ImageBackground
              resizeMode="cover"
              source={img}
              style={{ flex: 1, justifyContent: "center" }}
            />
          </View>
          <View style={[styles.attendance]}>
            <Text style={{ fontSize: 18, fontWeight: "400" }}>
              Shashank Kyadari
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "200" }}>201144788</Text>
            <Text style={{ fontSize: 15, fontWeight: "200" }}>
              I-B Bhaskara
            </Text>
          </View>
        </View>

        <View style={[styles.info]}>
          <View style={[styles.infobox]}>
            <View style={[styles.infocontent]}>
              <Text style={styles.text}>Student</Text>
              <Text>4th year</Text>
            </View>
            <View style={[styles.line]}></View>
          </View>
          <View style={[styles.infobox]}>
            <View style={[styles.infocontent]}>
              <Text style={styles.text}>Presence</Text>
              <Text>80%</Text>
            </View>
            <View style={[styles.line]}></View>
          </View>
          <View style={[styles.infobox, { width: 70 }]}>
            <View style={[styles.infocontent]}>
              <Text style={styles.text}>Attended</Text>
              <Text>80/100</Text>
            </View>
          </View>
        </View>
        <View style={styles.container2}>
          <View style={styles.circlecontainer}>
            <Image
              style={[styles.circle, styles.cir1, { resizeMode: "center" }]}
              source={require("../../assets/icons8-class-51.png")}
            />
            <Text style={styles.text2}>Classes</Text>
          </View>
          <View style={styles.circlecontainer}>
            <Image
              style={[styles.circle, styles.cir1, { resizeMode: "center" }]}
              source={require("../../assets/icons8-assignment-100.png")}
            />
            <Text style={styles.text2}>Assignment</Text>
          </View>
          <View style={styles.circlecontainer}>
            <Image
              style={[styles.circle, styles.cir1, { resizeMode: "center" }]}
              source={require("../../assets/icons8-attendance-96.png")}
            />
            <Text style={styles.text2}>Attendance</Text>
          </View>
          <View style={styles.circlecontainer}>
            <Image
              style={[styles.circle, styles.cir1, { resizeMode: "center" }]}
              source={require("../../assets/icons8-more-64.png")}
            />
            <Text style={styles.text2}>More</Text>
          </View>
        </View>
        <View style={styles.container3}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.text3}>Schedule</Text>
            <Text style={styles.text2}>View all</Text>
          </View>
          <View
            style={[styles.info, { height: 110, backgroundColor: "white" }]}
          >
            <View
              style={[
                styles.infobox,
                {
                  height: 70,
                  width: 80,
                  borderRadius: 10,

                  backgroundColor: "#ffd663",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                },
              ]}
            >
              <Text>1</Text>
              <Text>Period</Text>
            </View>
            <View
              style={[
                styles.attendance,
                { height: 90, justifyContent: "space-around" },
              ]}
            >
              <Text style={styles.text3}>Biology Class</Text>
              <Text style={styles.text2}>9:00-10:00</Text>
              <Text style={styles.text2}>Rukshi</Text>
            </View>
          </View>
          <View
            style={[styles.info, { height: 110, backgroundColor: "white" }]}
          >
            <View
              style={[
                styles.infobox,
                {
                  height: 70,
                  width: 80,
                  borderRadius: 10,

                  backgroundColor: "#63a2ff",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                },
              ]}
            >
              <Text>2</Text>
              <Text>Period</Text>
            </View>
            <View
              style={[
                styles.attendance,
                { height: 90, justifyContent: "space-around" },
              ]}
            >
              <Text style={styles.text3}>Math Class</Text>
              <Text style={styles.text2}>10:00-11:00</Text>
              <Text style={styles.text2}>Turumal</Text>
            </View>
          </View>
          <View
            style={[styles.info, { height: 110, backgroundColor: "white" }]}
          >
            <View
              style={[
                styles.infobox,
                {
                  height: 70,
                  width: 80,
                  borderRadius: 10,

                  backgroundColor: "#6369ff",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                },
              ]}
            >
              <Text>3</Text>
              <Text>Period</Text>
            </View>
            <View
              style={[
                styles.attendance,
                { height: 90, justifyContent: "space-around" },
              ]}
            >
              <Text style={styles.text3}>History Class</Text>
              <Text style={styles.text2}>11:00-12:00</Text>
              <Text style={styles.text2}>Saraswati</Text>
            </View>
          </View>
        </View>
        
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 20,
  },

  profile: {
    height: 90,
    width: 90,
    overflow: "hidden",
    borderRadius: 50,
  },
  attendance: {
    width: 200,
    padding: 12,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  infocontent: {
    height: 50,
    width: 80,
    justifyContent: "space-around",
  },
  line: {
    backgroundColor: "#e3e3e3",
    height: 40,
    width: 2,
  },
  info: {
    height: 90,
    width: 330,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#e3e3e3",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  infobox: {
    height: 80,
    width: 100,
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    borderRadius: 30,
    borderColor: "#9e9b9b",
    borderWidth: 1,
  },
  container2: {
    height: 80,
    width: 330,
    margin: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  circlecontainer: {
    height: 80,
    alignItems: "center",
    justifyContent: "space-around",
  },

  container3: {
    margin: 40,
    height: 370,
justifyContent:"space-around",
    width: 330,
  },
  text: { fontSize: 15, fontWeight: "400", color: "#9e9b9b" },
  text2: { fontSize: 12, fontWeight: "500", color: "black" },
  text3: { fontSize: 17, fontWeight: "600", color: "black" },
  cir1: { backgroundColor: "white" },
  cir2: { backgroundColor: "violet" },
  cir3: { backgroundColor: "purple" },
});
