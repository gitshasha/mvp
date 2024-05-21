import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
} from "react-native";
import io from "socket.io-client";

const socket = io("http://192.168.1.9:8001");

const Messaging = ({ userId, userRole }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
  socket.on("receiveMessage", (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  });

  return () => {
    socket.off("receiveMessage");
  };
  }, [userId, userRole]);

  const sendMessage = () => {
    const messageData = {
      senderId: 1239,
      senderRole: "Student",
      receiverId: 14571, // receiver's ID
      receiverRole: "Teacher", // receiver's role
      content: message,
    };

    socket.emit("sendMessage", messageData);
    setMessage("");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.message_id.toString()}
        renderItem={({ item }) => (
          <View style={styles.message}>
            <Text>{item.content}</Text>
            <Text>{new Date(item.timestamp).toLocaleString()}</Text>
          </View>
        )}
      />
      <TextInput
        style={styles.input}
        value={message}
        onChangeText={setMessage}
        placeholder="Type a message"
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  message: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default Messaging;
