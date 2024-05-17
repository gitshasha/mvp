import { View, Text, Button,SafeAreaView,TextInput,StyleSheet } from 'react-native'
import React,{ useContext } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import { UserContext } from '../api/Userprovider'
import {useNavigation} from "@react-navigation/native"
import axios from 'axios'
export default function Login() {
    const [username, setusername] = React.useState('Sha');
    const [password, setpassword] = React.useState('Sha');
    const [selected, setSelected] = React.useState("Student");

    const{ setuser}=useContext(UserContext)
     

    const navigation = useNavigation();
const handleSubmit=async(e)=>{
  if(selected==="Student"){
   
      // await axios
      //   .post("http://192.168.1.8:8001/api/student/login", {
      //     username: username,
      //     password: password,
      //   })
      //   .then((res) => {
      //     setuser(res);
      //     console.log(res.data);
      //     navigation.navigate("Dash");
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });

      try {
        const response = await axios.post(
          "http://192.168.1.8:8001/api/student/login",
          {
            username: username,
            password: password,
          }
        );
        if (response.data.user) {
          const userparam = response.data.user;
          userparam.role = "Student";

          setuser(userparam);
          navigation.navigate("Dash");
        }
      } catch (error) {
        // Handle different types of errors (e.g., network error, authentication error)
        console.error("Login failed:", error);
        // Display an error message to the user or handle the error appropriately
      }


  }
  else if(selected==="Teacher"){
    
      try {
        const response = await axios.post(
          "http://192.168.1.8:8001/api/teacher/teacherlogin",
          
          {
            username: username,
            password: password,
          }
        );
        if (response.data.user) {
          const userparam = response.data.user;
          userparam.role = "Teacher";

          setuser(userparam);
          navigation.navigate("Dash");
        }
      } catch (error) {
        // Handle different types of errors (e.g., network error, authentication error)
        console.error("Login failed:", error);
        // Display an error message to the user or handle the error appropriately
      }

  }

}
    const data = [
        {key:'1', value:'Student',},
        {key:'2', value:'Teacher'},
        {key:'3', value:'Admin'},

    ]

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setusername}
        value={username}
        placeholder="username"
      />
      <TextInput
        style={styles.input}
        onChangeText={setpassword}
        value={password}
        placeholder="password"
      />
      <SelectList
        setSelected={(val) => {
          setSelected(val);
        }}
        data={data}
        save="value"
      />
      <Button title="Submit" onPress={() => handleSubmit()} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });