import { View, Text, SafeAreaView,StyleSheet, Image,TouchableOpacity } from 'react-native'
import React from 'react'

import {useNavigation ,useRoute} from "@react-navigation/native"

export default function Nav({ userrole }) {
  let home = require("../../assets/icons8-home-64.png");
  const navigation = useNavigation();
  return (
    // <View style={style.cont}>
    //   <View style={[style.circle,style.cir1]} ><TouchableOpacity style={{height:30,width:30}} onPress={()=>{    navigation.navigate("StudentAcc")}}></TouchableOpacity></View>
    //   <View style={[style.circle,style.cir2]}><TouchableOpacity style={{height:30,width:30}} onPress={()=>{    navigation.navigate("Home")}}></TouchableOpacity></View>
    //   <View style={[style.circle,style.cir3]}><TouchableOpacity style={{height:30,width:30}} onPress={()=>{ navigation.navigate("StudentNotif")}}></TouchableOpacity></View>
    //   <View style={[style.circle,style.cir3]}><TouchableOpacity style={{height:30,width:30}} onPress={()=>{ navigation.navigate("Schedule")}}></TouchableOpacity></View>
    // </View>
    <>
      {userrole == "Student" ? (
        <View style={styles.container2}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={styles.circlecontainer}
          >
            <Image
              style={[styles.circle, { resizeMode: "center" }]}
              source={home}
            />
            <Text style={styles.text2}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Schedule");
            }}
            style={styles.circlecontainer}
          >
            <Image
              style={[styles.circle, { resizeMode: "center" }]}
              source={require("../../assets/icons8-more-64.png")}
            />
            <Text style={styles.text2}>Schedule</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("StudentNotif");
            }}
            style={styles.circlecontainer}
          >
            <Image
              style={[styles.circle, { resizeMode: "center" }]}
              source={require("../../assets/icons8-notice-96.png")}
            />
            <Text style={styles.text2}>Notification</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Studentpost");
            }}
            style={styles.circlecontainer}
          >
            <Image
              style={[styles.circle, { resizeMode: "center" }]}
              source={require("../../assets/icons8-notice-96.png")}
            />
            <Text style={styles.text2}>Post</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("StudentAcc");
            }}
            style={styles.circlecontainer}
          >
            <Image
              style={[styles.circle, { resizeMode: "center" }]}
              source={require("../../assets/icons8-class-51.png")}
            />
            <Text style={styles.text2}>StudAccount</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container2}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={styles.circlecontainer}
          >
            <Image
              style={[styles.circle, { resizeMode: "center" }]}
              source={home}
            />
            <Text style={styles.text2}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("TeacherSchedule");
            }}
            style={styles.circlecontainer}
          >
            <Image
              style={[styles.circle, { resizeMode: "center" }]}
              source={require("../../assets/icons8-more-64.png")}
            />
            <Text style={styles.text2}>Schedule</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("TeacherNotification");
            }}
            style={styles.circlecontainer}
          >
            <Image
              style={[styles.circle, { resizeMode: "center" }]}
              source={require("../../assets/icons8-notice-96.png")}
            />
            <Text style={styles.text2}>Notification</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("TeacherAcc");
            }}
            style={styles.circlecontainer}
          >
            <Image
              style={[styles.circle, { resizeMode: "center" }]}
              source={require("../../assets/icons8-class-51.png")}
            />
            <Text style={styles.text2}>Teacher Account</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  cont: {
    width: "100%",

    backgroundColor: "whi",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  container2: {
    height: 70,
    width: "100%",
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  circlecontainer: {
    height: 60,
    alignItems: "center",
    justifyContent: "space-around",
  },
  circle: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    borderRadius: 25,
  },

  text2: { fontSize: 10, fontWeight: "500", color: "black" },
  cir1: { backgroundColor: "pink" },
  cir2: { backgroundColor: "violet" },
  cir3: { backgroundColor: "purple" },
});