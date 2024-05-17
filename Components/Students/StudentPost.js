import React, { useState } from "react";
import { Button, Image, View, TextInput } from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
export default function StudentPost() {
  const [image, setImage] = useState(null);
  const[desc, setdesc] = useState("");

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      console.log(result.assets[0].uri);
      setImage(result.assets[0].uri);
      uploadImage(result.assets[0].uri);
    }
  };

  const uploadImage = async (fileUri) => {
    console.log(fileUri);
    try {
      const formData = new FormData();
      formData.append("filename", {
        uri: fileUri,
        name: "photo.jpg",
        type: "image/jpg",
      });
      console.log("filename", formData._parts[0][1]);
      const response = await axios.post(
        "http://192.168.1.8:8001/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the Content-Type header to multipart/form-data
          },
        }
      );

      console.log("Upload success:", response.data);
    } catch (error) {
      console.log("Upload error:", error);
    }
  };
  return (
    <View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
        <TextInput
          multiline={true}
          numberOfLines={4}
          placeholder="Description"
          value={desc}
          onChangeText={setdesc}
        />
        <Button title="Pick an image from camera roll" onPress={pickImage} />
      </View>
    </View>
  );
}
