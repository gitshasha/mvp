import { View, Text ,StyleSheet,ImageBackground, Button, TouchableOpacity,ScrollView, Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Activities from './Activities'
import { useNavigation } from '@react-navigation/native'

export default function TeacherDashboard() {
    const navigation = useNavigation();
    const img = {
      uri: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?w=826&t=st=1711365764~exp=1711366364~hmac=05b90c901280897564f9750114251b0c3061c47317562de6de51ef5102425b68",
    };
  return (
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
          <Text style={{ fontSize: 18, fontWeight: "400" }}>John</Text>
          <Text style={{ fontSize: 15, fontWeight: "200" }}>14567</Text>
          <Text style={{ fontSize: 15, fontWeight: "200" }}>
            Geography,Biology
          </Text>
        </View>
      </View>
      <View style={styles.container2}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 15,
            paddingRight: 12,
          }}
        >
          <Text>Classes</Text>
          <Image
            style={{ height: 15, width: 20 }}
            source={require("../../assets/icons8-right-arrow-100.png")}
          />
        </View>
        <ScrollView horizontal={true}>
          <View style={styles.classcontainer}>
            <View style={[styles.eachclass, { backgroundColor: "#bf482a" }]}>
              <View style={styles.classdetails}>
                <View style={styles.classimg}>
                  <ImageBackground
                    resizeMode="cover"
                    source={img}
                    style={{ flex: 1, justifyContent: "center" }}
                  />
                </View>
                <View style={styles.classname}>
                  <Text
                    style={{
                      fontSize: 10,
                    }}
                  >
                    Computer
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                    }}
                  >
                    9:00-10:00
                  </Text>
                </View>
              </View>
              <View style={styles.Subject}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                  }}
                >
                  Class II-A
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  height: 35,
                  width: 100,
                  backgroundColor: "lightgreen",
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    color: "white",
                  }}
                >
                  Details
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.eachclass, { backgroundColor: "#2a6bbf" }]}>
              <View style={styles.classdetails}>
                <View style={styles.classimg}>
                  <ImageBackground
                    resizeMode="cover"
                    source={img}
                    style={{ flex: 1, justifyContent: "center" }}
                  />
                </View>
                <View style={styles.classname}>
                  <Text
                    style={{
                      fontSize: 10,
                    }}
                  >
                    Computer
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                    }}
                  >
                    11:00-12:00
                  </Text>
                </View>
              </View>
              <View style={styles.Subject}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                  }}
                >
                  Class II-B
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  height: 35,
                  width: 100,
                  backgroundColor: "lightgreen",
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    color: "white",
                  }}
                >
                  Details
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.eachclass, { backgroundColor: "#2a6bbf" }]}>
              <View style={styles.classdetails}>
                <View style={styles.classimg}>
                  <ImageBackground
                    resizeMode="cover"
                    source={img}
                    style={{ flex: 1, justifyContent: "center" }}
                  />
                </View>
                <View style={styles.classname}>
                  <Text
                    style={{
                      fontSize: 10,
                    }}
                  >
                    Computer
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                    }}
                  >
                    11:00-12:00
                  </Text>
                </View>
              </View>
              <View style={styles.Subject}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                  }}
                >
                  Class II-B
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  height: 35,
                  width: 100,
                  backgroundColor: "lightgreen",
                  borderRadius: 20,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 13,
                    color: "white",
                  }}
                >
                  Details
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.container3}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Classes");
          }}
          style={styles.circlecontainer}
        >
          <Image
            style={[styles.circle, styles.cir1, { resizeMode: "center" }]}
            source={require("../../assets/icons8-class-51.png")}
          />
          <Text style={styles.text2}>Classes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Assignment");
          }}
          style={styles.circlecontainer}
        >
          <Image
            style={[styles.circle, styles.cir1, { resizeMode: "center" }]}
            source={require("../../assets/icons8-assignment-100.png")}
          />
          <Text style={styles.text2}>Assignment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Attendance");
          }}
          style={styles.circlecontainer}
        >
          <Image
            style={[styles.circle, styles.cir1, { resizeMode: "center" }]}
            source={require("../../assets/icons8-attendance-96.png")}
          />
          <Text style={styles.text2}>Attendance</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Salary");
          }}
          style={styles.circlecontainer}
        >
          <Image
            style={[styles.circle, styles.cir1, { resizeMode: "center" }]}
            source={require("../../assets/icons8-more-64.png")}
          />
          <Text style={styles.text2}>Salary</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 20,
    width: 330,
  },

  profile: {
    height: 90,
    width: 90,
    overflow: "hidden",
    borderRadius: 50,
  },
  attendance: {
    width: 230,
    padding: 12,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  container2: {
    height: 300,
    width: 350,
    justifyContent: "space-around",
  },
  classcontainer: {
    height: 250,
    width: 550,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  eachclass: {
    height: 200,
    width: 160,
    justifyContent: "space-around",
    alignItems: "flex-start",
    padding: 20,
    borderRadius: 15,
  },
  classdetails: {
    height: 40,
    width: 120,
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "space-between",
  },
  classimg: {
    height: 40,
    width: 40,
    borderRadius: 20,
    overflow: "hidden",
  },
  classname: {
    height: 40,
    width: 80,
    alignItems: "center",
    justifyContent: "space-evenly",
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
  container3: {
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
});