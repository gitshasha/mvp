import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Teacherclasses({ route, navigation }) {
  const { teacherId } = route.params;
  const [getclass, setgetclass] = useState([]);
  useEffect(() => {
    const getteacherclasses = () => {
      axios
        .get(
          `http://192.168.1.9:8001/api/teacher/getteacherclasses/${teacherId}`
        )
        .then((data) => {
          console.log(data.data);
          setgetclass(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getteacherclasses();
  }, []);
  return (
    <View>
      <Text>Teacherclasses</Text>
      {getclass &&
        getclass.map((data, ind) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Message", {
                teacherId: teacherId,
                class_subject_id: data.class_subject_id,
              });
            }}
            key={ind}
          >
            <Text>{data.subject_name}</Text>
            <Text>{data.teacher_name}</Text>
            <Text>{data.class_name}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
}