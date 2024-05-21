import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function ClassMessages({route,navigate}) {
    const {class_subject_id}=route.params
    const [classmessages,setclassmessages]=useState([])
    useEffect(()=>{
        const getmessages=async()=>{

const messages = await axios.get(
  `http://192.168.1.9:8001/api/student/getmessages/${class_subject_id}`
);
if (messages) {
  setclassmessages(messages.data);
}
else{
    console.log(messages)
}
        }
        
getmessages();

    },[])
  return (
    <View>
      <Text>ClassMessages</Text>
      {classmessages &&
        classmessages.map((data, ind) => (
          <TouchableOpacity key={ind} >
            <Text>{data.content}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
}