import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../api/Userprovider";
import { useNavigation } from "@react-navigation/native";
import Nav from "./Nav";
export default function StudentDashboard() {
  const { user } = useContext(UserContext);
  const [DashboardData, setDashboardData] = useState({});
  
  const [timetableinfo, settimetableinfo] = useState([]);
   const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
 const fetchDashboardData = async () => {
   try {
     const response = await axios.get(
       `http://192.168.1.8:8001/api/student/getstudentclass/${user.class_id}`
     );
     setDashboardData(response.data);
   } catch (error) {
     console.error("Error fetching dashboard data:", error);
   } finally {
     setLoading(false);
   }
 };
const gettimteble = async () => {
await axios
  .get(`http://192.168.1.8:8001/api/student/getclasstimetable/${user.class_id}`)
  .then((data) => {
    settimetableinfo(data.data);
  })
  .catch((err) => {
    console.log(err);
  });
};
 fetchDashboardData();
 gettimteble();
  }, []);
   if (loading) {
     return <ActivityIndicator />;
   }

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
          <Text style={{ fontSize: 18, fontWeight: "400" }}>
            {user.first_name + " " + user.last_name}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "200" }}>
            {user.student_id}
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "200" }}>
            {DashboardData && DashboardData[0]["class_name"].slice(6)} Bhaskara
          </Text>
        </View>
      </View>

      <View style={[styles.info]}>
        <View style={[styles.infobox]}>
          <View style={[styles.infocontent]}>
            <Text style={styles.text}>Student</Text>
            <Text>{DashboardData && DashboardData[0]["class_name"]}</Text>
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Studentclasses");
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
            navigation.navigate("Assignment", { student_id: user.student_id });
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
            navigation.navigate("Studattendance",{});
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
            navigation.navigate("Feemanagement");
          }}
          style={styles.circlecontainer}
        >
          <Image
            style={[styles.circle, styles.cir1, { resizeMode: "center" }]}
            source={require("../../assets/icons8-more-64.png")}
          />
          <Text style={styles.text2}>Fee-Pay</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.container3}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.text3}>Time table</Text>
            <Text style={styles.text2}>View all</Text>
          </View>

          {timetableinfo &&
            timetableinfo.map((data, ind) => (
              <View
                key={ind}
                style={[
                  styles.info,
                  { height: 110, backgroundColor: "white", width: 315 },
                ]}
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
                  <Text>{ind + 1}</Text>
                  <Text>Period</Text>
                </View>
                <View
                  style={[
                    styles.attendance,
                    { height: 90, justifyContent: "space-around" },
                  ]}
                >
                  <Text style={styles.text3}>{data.subject_name}</Text>
                  <Text style={styles.text2}>
                    {data.start_time}-{data.end_time}
                  </Text>
                  <Text style={styles.text2}>{data.teacher_name}</Text>
                </View>
              </View>
            ))}
        </View>
      </ScrollView>
    </View>
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
    height: 870,
    justifyContent: "space-around",
    width: 315,
  },
  timetablecont: {
    height: 870,
    justifyContent: "space-around",
    width: 315,
  },
  text: { fontSize: 15, fontWeight: "400", color: "#9e9b9b" },
  text2: { fontSize: 12, fontWeight: "500", color: "black" },
  text3: { fontSize: 17, fontWeight: "600", color: "black" },
  cir1: { backgroundColor: "white" },
  cir2: { backgroundColor: "violet" },
  cir3: { backgroundColor: "purple" },
});
