import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  Button,
} from "react-native";
import axios from "axios";

import { useContext } from "react";
import { UserContext } from "../../api/Userprovider";
export default function StudentQuiz({ route, navigation }) {

  const { user } = useContext(UserContext);
 const { quiz_id } = route.params;
  const [quizquestions, setquizquestions] = useState([]);
  useEffect(() => {
   
    console.log("quizid", quiz_id);
    const getquizquestions = async () => {
      await axios
        .get(`http://192.168.1.8:8001/api/student/getquizquestions/${quiz_id}`)
        .then((data) => {
          console.log(data.data);
          setquizquestions(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    
    };
      getquizquestions();
  }, []);


  // State to track selected options
  const [selectedOptions, setSelectedOptions] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Function to handle option selection
  const handleOptionSelect = (question_id, optionId) => {
    if (!submitted) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [question_id]: optionId,
      }));
      console.log(selectedOptions);
    }
  };

  // Function to check answers and show results
  const handleSubmit =async () => {
    setSubmitted(true);
    let score = 0;
    await axios.post("http://192.168.1.8:8001/api/student/submitanswers", {
      student_id: user.student_id,
      quiz_id: quiz_id,

      answers: selectedOptions,
    });
   navigation.navigate("result")
  };


  const [prev, setprev] = useState();
  const [next, setnext] = useState(0);
  return (
    <ScrollView>
      <View style={styles.container}>
        {
          <View>
            <Text>
              {quizquestions[next] && quizquestions[next].question_text}
            </Text>
            <View>
              {quizquestions[next] &&
                quizquestions[next].options.map((data, ind) => (
                  <TouchableOpacity
                    onPress={() =>
                      handleOptionSelect(quizquestions[next].question_id, data)
                    }
                    disabled={submitted}
                    key={ind}
                    style={styles.option}
                  >
                    <Text>{data}</Text>
                  </TouchableOpacity>
                ))}
            </View>
          </View>
        }
        <View>
          <Button
            title={next.toString()}
            onPress={() => {
              setnext(next - 1);
            }}
            disabled={next > 0 ? false : true}
          />
          <Button
            title={next.toString()}
            onPress={() => {
              setnext(next + 1);
            }}
            disabled={next >= quizquestions.length - 1 ? true : false}
          />
        </View>
        {!submitted && (
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  option: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: "lightblue",
  },
  correctOption: {
    backgroundColor: "lightgreen",
  },
  submitButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
