import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentPost from "./StudentPost";

export default function AssignmentPage({ route }) {
  const { assignment_id } = route.params;
  const[assign,setassign]=useState({})

  useEffect(() => {
    const getassinfo = () => {
      axios
        .get(
          `http://192.168.1.8:8001/api/student/assignmentinfo/${assignment_id}`
        )
        .then((data) => {
          console.log("only",data.data)
          setassign(data.data[0])
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getassinfo()
  }, []);
  return (
    <View>
      {assign ? (
        <View>
          <Text>{assign.title}</Text>
          <Text>{assign.description}</Text>
          {assign.image_url ? 
            <Image
              source={{ uri: assign.image_url}}
              style={{ width: 200, height: 200 }}
            />
          :<></>}
        </View>
      ) : (
        <></>
      )}
<StudentPost/>
    </View>
  );
}
