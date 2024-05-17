import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../api/Userprovider";
export default function Studattendance() {
  const { user } = useContext(UserContext);
  const [attendance, setattendance] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://192.168.1.8:8001/api/student/dailyattendance/${user.student_id}`
      )
      .then((res) => {
        // console.log(res.data)
        setattendance(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View style={styles.totalcont}>
      <View style={styles.splitcont}>
        <View style={styles.half1}></View>
        <View style={styles.half2}></View>
        <View style={styles.middlecont}>
          <View style={styles.middlebox}>
            <Text style={styles.valuestyle}>
             150
            </Text>
            <Text style={styles.textstyle}>classes </Text>
          </View>
          <View style={styles.middlebox}>
            <Text style={styles.valuestyle}>110</Text>
            <Text style={styles.textstyle}>attended </Text>
          </View>
          <View style={styles.middlebox}>
            <Text style={styles.valuestyle}>40</Text>
            <Text style={styles.textstyle}>absent </Text>
          </View>
          <View style={styles.middlebox}>
            <Text style={styles.valuestyle}>2</Text>
            <Text style={styles.textstyle}>late</Text>
          </View>
        </View>
      </View>

      <View style={styles.attendcont}>
        <View style={styles.attendhead}>
          <Text>ATTendance Details</Text>
        </View>

        <View style={styles.attendtable}>
          <View style={styles.attendcolumns}>
            <Text>Day</Text>
            <Text>Month</Text>
            <Text>Status</Text>
          </View>

          <View style={styles.attendrows}>
            {attendance.map((data, ind) => (
              <View style={styles.attendeachrow} key={ind}>
                <View style={styles.datebox}>
                  <Text>{data.attendance_date.slice(8, 10)}</Text>
                </View>
                <View style={styles.monthbox}>
                  <Text>{data.attendance_date.slice(5, 7)}</Text>
                </View>
                <View style={styles.monthbox}>
                  <Text>{data.status}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );

}
const styles = StyleSheet.create({
  totalcont: { height: "100%", width: "100%", alignItems: "center" },
  splitcont: { height: "35%", width: "100%" },
  half1: {
    height: "70%",
    width: "100%",
    backgroundColor: "blue",
  },
  half2: { height: "30%", width: "100%" },
  middlecont: {
    position: "absolute",
    top: "35%",
    left: "15%",
    height: "60%",
    width: "70%",
    backgroundColor: "grey",
    borderRadius: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "center",
  },
  middlebox: {
    height: "45%",
    width: "45%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  valuestyle: {
    fontSize: 14,
    fontWeight: "500",
  },
  textstyle: {
    fontSize: 13,
    fontWeight: "500",
  },
  attendcont: {
    height: "60%",
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  attendhead: {
    height: "10%",
    width: "90%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  attendtable: {
    height: "85%",
    width: "90%",
    // backgroundColor: "blue",
    alignItems: "center",
  },
  attendcolumns: {
    height: "10%",
    width: "95%",
    // backgroundColor: "pink",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  attendrows: {
    height: "90%",
    width: "100%",
    // backgroundColor: "grey",
    display: "flex",
    justifyContent: "space-evenly",
  },
  attendeachrow: {
    height: "20%",
    width: "100%",
    // backgroundColor: "pink",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  datebox: {
    height: "80%",
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    borderRadius: 10,
  },
  monthbox: {
    height: "80%",
    width: "25%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
  },
});
