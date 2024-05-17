import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  Button,
} from "react-native";

export default function StudentQuiz() {
  // Fake JSON data for the quiz
  const quizData = {
    quizzes: [
      {
        quiz_id: 1,
        quiz_title: "Math Quiz",
        quiz_description: "Test your math skills",
        questions: [
          {
            question_id: 1,
            question_text: "What is 2 + 2?",
            options: [
              { option_id: 1, option_text: "3", is_correct_option: false },
              { option_id: 2, option_text: "4", is_correct_option: true },
              { option_id: 3, option_text: "5", is_correct_option: false },
              { option_id: 4, option_text: "6", is_correct_option: false },
            ],
            correct_answer: 2,
          },
          {
            question_id: 2,
            question_text: "What is 10 - 5?",
            options: [
              { option_id: 5, option_text: "3", is_correct_option: false },
              { option_id: 6, option_text: "4", is_correct_option: false },
              { option_id: 7, option_text: "5", is_correct_option: true },
              { option_id: 8, option_text: "6", is_correct_option: false },
            ],
            correct_answer: 7,
          },
        ],
      },
    ],
  };

  // State to track selected options
  const [selectedOptions, setSelectedOptions] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Function to handle option selection
  const handleOptionSelect = (questionId, optionId) => {
    if (!submitted) {
      setSelectedOptions((prevState) => ({
        ...prevState,
        [questionId]: optionId,
      }));
      console.log(selectedOptions);
    }
  };

  // Function to check answers and show results
  const handleSubmit = () => {
    setSubmitted(true);
    let score = 0;
    quizData.quizzes[0].questions.forEach((question) => {
      if (selectedOptions[question.question_id] === question.correct_answer) {
        score++;
      }
    });
    Alert.alert(
      "Quiz Result",
      `You scored ${score} out of ${quizData.quizzes[0].questions.length}`,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );
  };

  // Function to check if an option is selected for a question
  const isOptionSelected = (questionId, optionId) => {
    return selectedOptions[questionId] === optionId;
  };
  const [prev, setprev] = useState();
  const [next, setnext] = useState(0);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{quizData.quizzes[0].quiz_title}</Text>
        <Text style={styles.description}>
          {quizData.quizzes[0].quiz_description}
        </Text>
        <View>
          {
            <View>
              <Text>
                {quizData.quizzes[0].questions[next] &&
                  quizData.quizzes[0].questions[next].question_text}
              </Text>
              <View>
                {quizData.quizzes[0].questions[next].options.map(
                  (data, ind) => (
                    <TouchableOpacity
                      onPress={() =>
                        handleOptionSelect(next + 1, data.option_id)
                      }
                      disabled={submitted}
                      key={ind}
                      style={styles.option}
                    >
                      <Text>{data.option_text}</Text>
                    </TouchableOpacity>
                  )
                )}
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
              disabled={
                next >= quizData.quizzes[0].questions.length - 1 ? true : false
              }
            />
          </View>
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
