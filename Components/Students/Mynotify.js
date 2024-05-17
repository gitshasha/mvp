import { useState, useEffect, useRef } from "react";
import { Text, View, Button, Platform, Image, StyleSheet } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

import { useContext } from "react";
import { UserContext } from "../../api/Userprovider";
import Constants from "expo-constants";
import axios from "axios";

export default function Mynotify() {
  const { user } = useContext(UserContext);
  const [studentpost, setstudentpost] = useState([]);

  useEffect(() => {
    const getstudentpost = async () => {
      await axios
        .get("http://192.168.1.8:8001/api/student/studentposts")
        .then((data) => {
          console.log(data.data[0].image_url);
          setstudentpost(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getstudentpost();
  }, []);
  return (
    <View style={{ height: "100%", alignItems: "center" }}>
      {studentpost &&
        studentpost.map((data, ind) => (
          <View key={ind} style={styles.postcont}>
            <View style={styles.postauthor}>
              <View
                style={{
                  flexDirection: "row",
                  height: "100%",
                  alignItems: "center",
                  width: "30%",
                  justifyContent: "space-around",
                }}
              >
                <View
                  style={{
                    height: "50%",
                    width: "30%",
                    borderRadius: 10,
                    backgroundColor: "white",
                  }}
                ></View>
                <Text style={{ fontSize: 15, color: "#f0f2f5" }}>
                  {data.author}
                </Text>
              </View>
              <Text style={{ fontSize: 10, color: "#f0f2f5" }}>
                {data.created_at.slice(0, 10)}
              </Text>
            </View>
            <View style={styles.postbody}>
              <Text style={{ fontSize: 20, color: "#f0f2f5" }}>
                {data.title}
              </Text>
            </View>
            <View style={styles.postimage}>
              <Image
                source={{ uri: `${data.image_url}` }}
                style={{ width: "95%", height: "100%", resizeMode: "cover" }}
              />
            </View>
          </View>
        ))}
    </View>
  );
}
const styles = StyleSheet.create({
  postcont: {
    minHeight: "50%",
    maxHeight: "60%",
    width: "90%",

    backgroundColor: "#0f1112",
    alignItems: "center",
    borderRadius: 10,
  },
  postauthor: {
    height: "15%",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",

    marginBottom: "4%",
  },
  postbody: {
    maxHeight: "40%",
    width: "100%",
    marginBottom: "4%",
  },
  postimage: {
    minHeight: "50%",
    maxHeight: "60%",
    width: "100%",

    alignItems: "center",
    backgroundColor: "#8faab0",
    borderRadius: 10,
    overflow: "hidden",
  },
});
