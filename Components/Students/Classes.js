import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { useContext } from "react";
import { UserContext } from "../../api/Userprovider";
export default function Classes() {
  const [allsubjects, setallsubjects] = useState([]);
  
  const { user } = useContext(UserContext);
  useEffect(() => {
    const getclass = () => {
      axios
        .get(
          `http://192.168.1.8:8001/api/student/getclasssubjects/${user.class_id}`
        )
        .then((res) => {
          setallsubjects(res.data)
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getclass();
  }, []);
  return (
    <ScrollView>
      <View style={styles.bookcont}>
        {allsubjects &&
          allsubjects.map((data, ind) => (
            <View key={ind} style={styles.eachclass}>
              <View style={styles.eachclassphoto}></View>
              <Text style={styles.eachclasshead}>
                {data.subject_name}
              </Text>
            </View>
          ))}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  bookcont: {
    alignItems: "center",
    justifyContent: "space-around",
    overflow: "scroll",
  },
  eachclass: {
    height: 120,
    width: 330,
    backgroundColor: "red",
    margin: 2,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems:"center"
  },
  eachclassphoto: {
    height: 80,
    width: 90,
    backgroundColor: "white",
    margin: 2,
    borderRadius: 10,
  },
  eachclasshead: {
    height: 80,
    width: 200,
    fontSize:17,
  },
});
