import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import axios from "axios";

import { SelectList } from "react-native-dropdown-select-list";
const TeacherMessage = ({route}) => {
  const {teacherId}=route.params
  const { class_subject_id } = route.params;
  console.log(class_subject_id)

  const [content, setContent] = useState("");
  // const [teacherId, setTeacherId] = useState(1); // Assuming the logged-in teacher's ID is 1
  const [classId, setClassId] = useState(null);
  const [classes, setClasses] = useState([]);
 const [selected, setSelected] = React.useState();

const data = [
  { key: "Class1", value: 132 },
  { key: "class2", value: 123 },
];
  const sendMessage = async () => {
    try {
      const response = await axios.post(
        "http://192.168.1.9:8001/api/teacher/messageclass",
        {
          teacherId: teacherId,
          class_subject_id: class_subject_id,
          content: content,
        }
      );
      console.log("Message sent, ID:", response.data.messageId);
      setContent("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Message to Class</Text>

      <TextInput
        style={styles.input}
        value={content}
        onChangeText={setContent}
        placeholder="Enter your message"
      />
   
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  picker: {
    height: 50,
    width: "100%",
    marginBottom: 20,
  },
});

export default TeacherMessage;
