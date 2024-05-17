import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { MultiSelect } from "react-native-element-dropdown";
import { SelectList } from "react-native-dropdown-select-list";
export default function Quiz() {
  const [allquestions, setallquestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [display, setdisplay] = useState(false);
  const [classlist, setclasslist] = useState();
  const [questnumber, setquestnumber] = useState();
  const [postdisplay, setpostdisplay] = useState(false);
  const [id, setid] = useState(0);
  
    const navigation = useNavigation();
  const data = [
    { key: "1", value: options[0] },
    { key: "2", value: options[1] },
    { key: "3", value: options[2] },
    { key: "4", value: options[3] },
  ];

  const allclasses = [
    { label: "I-A", value: "I-A" },
    { label: "I-B", value: "I-B" },
    { label: "II-A", value: "II-A" },
  ];

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = () => {
    setallquestions([
      ...allquestions,
      {
        id: id,
        question: question,
        options: options,
        correctAnswer: correctAnswer,
      },
    ]);
    setid(id + 1);
    console.log("Submitted Question:", question);
    console.log("Options:", options);
    console.log("Correct Answer:", correctAnswer);
    setQuestion("")
    setOptions(["", "", "", ""]);
    setCorrectAnswer("")

  };
async function handlePost(){
  console.log("sfsf")
 const response =await axios.post("http://192.168.1.8:8001/api/teacher/addquiz", {
   allquestions:allquestions,
   classlist:classlist
 });
 navigation.navigate("Assignment");
 console.log(response)
}
  return (
    <View>
      {allquestions &&
        allquestions.map((data, ind) => (
          <TouchableOpacity
            onPress={() => {
              setquestnumber(data.id);
              setdisplay(true);
            }}
            key={ind}
          >
            <Text>{data.id}</Text>
          </TouchableOpacity>
        ))}
      {display ? (
        <View>
          <Text>{allquestions[questnumber].question}</Text>

          <Button
            onPress={() => {
              setdisplay(false);
              setQuestion("");
              setCorrectAnswer("");
              setOptions(["", "", "", ""]);
            }}
            title="Add"
          />
        </View>
      ) : (
        <></>
      )}

      {!display ? (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter your question"
            value={question}
            onChangeText={setQuestion}
            multiline={true}
          />
          {options.map((option, index) => (
            <TextInput
              key={index}
              style={styles.input}
              placeholder={`Option ${index + 1}`}
              value={option}
              onChangeText={(value) => handleOptionChange(index, value)}
            />
          ))}
          <SelectList
            setSelected={(val) => {
              setCorrectAnswer(val);
            }}
            data={data}
            save="value"
          />

          <Button title="Next" onPress={handleSubmit} />
        </View>
      ) : (
        <></>
      )}
      <Button
        title="complete"
        onPress={() => {
          setpostdisplay(true);
        }}
      />
      {postdisplay ? (
        <View>
          <SelectList
            setSelected={(val) => {
              setclasslist(val);
            }}
            data={allclasses}
            save="value"
          />
        

          <Button title="Post" onPress={handlePost} />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: "100%",
  },
});
