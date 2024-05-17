import { View, Text, TouchableOpacity, StyleSheet, ScrollViewComponent, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
export default function StudentAssign({route}) {
  const { student_id } = route.params;

  const navigation = useNavigation();
  const [quizes,setquizes]=useState([])
  const [assignments, setassignments] = useState([]);
  useEffect(() => {
    const getquizzes = () => {
      axios
        .get(`http://192.168.1.8:8001/api/student/getquizes/${student_id}`)
        .then((data) => {
        
          setquizes(data.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
       const getassignments = () => {
         axios
           .get(
             `http://192.168.1.8:8001/api/student/getassignments/${student_id}`
           )
           .then((data) => {
             console.log(data.data);
             if (data.data.length>=3){
               setassignments(data.data.slice(0,3));
             }
             else{
               setassignments(data.data);
             }
            
           })
           .catch((err) => {
             console.error(err);
           });
       };

getassignments()


    getquizzes()
  }, []);
  return (
    <View>
      <ScrollView>
        <View style={styles.container3}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              height: "15%",
              alignItems: "center",
            }}
          >
            <Text style={styles.text3}>Assignments</Text>
            <Text style={styles.text2}>View all</Text>
          </View>

          <View style={styles.assignmentcont}>
            {assignments &&
              assignments.map((data, ind) => (
                <View
                  key={ind}
                  style={[
                    styles.info,
                    {
                      height: 90,
                      backgroundColor: "white",
                      width: "88%",
                      margin: 4,
                      alignItems: "center",
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.infobox,
                      {
                        height: 40,
                        width: 50,
                        borderRadius: 10,

                        backgroundColor: "#6369ff",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                      },
                    ]}
                  >
                    <Text>3</Text>
                  </View>
                  <View
                    style={[
                      styles.attendance,
                      {
                        height: "100%",
                        justifyContent: "space-around",
                        flexDirection: "row",
                        width: "70%",
                      },
                    ]}
                  >
                    <View>
                      <Text style={styles.text3}>
                        {data.title.slice(0, 15)}...
                      </Text>
                      <Text style={styles.text2}>
                        {data.due_date.slice(0, 10)}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Studentassignment", {
                          assignment_id: data.assignment_id,
                        });
                      }}
                    >
                      <Text style={styles.text2}>Take Test</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
          </View>
        </View>
        <View style={styles.container3}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "90%",
              height: "15%",
              alignItems: "center",
            }}
          >
            <Text style={styles.text3}>Assignments</Text>
            <Text style={styles.text2}>View all</Text>
          </View>
          <View style={styles.assignmentcont}>
            {quizes &&
              quizes.map((data, ind) => (
                <View
                  key={ind}
                  style={[
                    styles.info,
                    {
                      height: 80,
                      backgroundColor: "white",
                      width: 315,
                      alignItems: "center",
                      margin: 4,
                    },
                  ]}
                >
                  <View
                    style={[
                      styles.infobox,
                      {
                        height: 40,
                        width: 50,
                        borderRadius: 10,

                        backgroundColor: "#6369ff",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                      },
                    ]}
                  >
                    <Text>3</Text>
                  </View>
                  <View
                    style={[
                      styles.attendance,
                      {
                        height: 60,
                        justifyContent: "space-around",
                        flexDirection: "row",
                        width: 240,
                      },
                    ]}
                  >
                    <View>
                      <Text style={styles.text3}>
                        {data.quiz_title.slice(0, 10)}
                      </Text>
                      <Text style={styles.text2}>
                        {data.quiz_date.slice(0, 10)}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("Studentquiz", {
                          quiz_id: data.quiz_id,
                        });
                      }}
                    >
                      <Text style={styles.text2}>Take Test</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container3: {
    margin: 20,
    height: 400,
    width: 355,
    backgroundColor: "white",
    alignItems: "center",
  },
  container2: {
    margin: 20,
    height: "40%",
    width: 355,
    backgroundColor: "white",
    alignItems: "center",
  },
  assignmentcont: {
    height: "80%",
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
    backgroundColor: "blue",
  },
  attendance: {
    padding: 12,
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  info: {
    height: 90,
    width: 330,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#e3e3e3",
    flexDirection: "row",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "space-evenly",
    
  },
  infobox: {
    height: 80,
    width: 100,
    flexDirection: "row",
    alignItems: "center",
  },
  scrollViewContent: {
    paddingVertical: 10,
  },
});
