import { View, Text, TextInput, StyleSheet ,Button,Image} from "react-native";
import React,{useState} from 'react'

import { useNavigation } from "@react-navigation/native";
import { MultiSelect } from "react-native-element-dropdown";

import * as ImagePicker from "expo-image-picker";
export default function SendNotify() {
       const [title, settitle] = React.useState("");
       const [messagebody, setmessagebody] = React.useState("");
       
    const navigation = useNavigation();
  const [classlist, setclasslist] = useState();
    const [selected, setSelected] = React.useState("");
       const handleSubmit = (e) => {
       
         navigation.navigate("Home");
         console.log({title:title,body:messagebody,classlist:classlist,takePhoto:takePhoto})
       };
       
   
  const allclasses = [
    { label: "I-A", value: "1234" },
    { label: "I-B", value: "1235" },
    { label: "II-A", value: "1244" },
  ];

 const [image, setImage] = useState(null);

 const pickImage = async () => {
   // No permissions request is necessary for launching the image library
   let result = await ImagePicker.launchImageLibraryAsync({
     mediaTypes: ImagePicker.MediaTypeOptions.All,
     allowsEditing: true,
     aspect: [4, 3],
     quality: 1,
   });

   console.log(result);

   if (!result.canceled) {
     setImage(result.assets[0].uri);
   }
 };
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={settitle}
        value={title}
        placeholder="Message Title"
      />
      <TextInput
        style={styles.input}
        onChangeText={setmessagebody}
        value={messagebody}
        placeholder="Message Body"
      />

      <MultiSelect
        data={allclasses}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={classlist}
        onChange={(item) => {
          setclasslist(item);
        }}
      />

      <Button title="Submit" onPress={() => handleSubmit()} />
      <View style={styles.container}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
  
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
});