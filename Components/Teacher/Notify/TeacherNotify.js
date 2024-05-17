import { View, Text, Button } from 'react-native'
import React from 'react'

import { useNavigation } from "@react-navigation/native";
export default function TeacherNotify() {
  
    const navigation = useNavigation();
  const messages = [
    {
      title: "sddads asdasd a",
      body: "sdafsfasfsfdasds",
    },
    {
      title: "sddads asdasd a",
      body: "youdidthissds",
    },
    {
      title: "sddads asdasd a",
      body: "sdafsfasfsfdasds",
    },
  ];
  return (
    <View>
      <View>
        {messages.map((data, ind) => (
          <View
            key={ind}
            style={{
              height: 100,
              width: 300,
              borderColor: "red",
              borderWidth: 1,
            }}
          >
            <Text style={{ fontSize: 20 }}>{data.title}</Text>
            <Text>{data.body}</Text>
          </View>
        ))}
      </View>
      <View>
        <Text>Notification</Text>
        <Button title="Send" onPress={()=>{ navigation.navigate("SendNotify");}}  />
      </View>
    </View>
  );
}