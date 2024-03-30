import { View, Text, Button,SafeAreaView,TextInput,StyleSheet } from 'react-native'
import React,{ useContext } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'
import { UserContext } from '../api/Userprovider'
import {useNavigation} from "@react-navigation/native"
export default function Login() {
    const [username, setusername] = React.useState('');
    const [password, setpassword] = React.useState('');
    const [selected, setSelected] = React.useState("");

    const{ setuser}=useContext(UserContext)
     
const handleSubmit=(e)=>{
    setuser({username:username,role:selected})
    navigation.navigate("Dash")
    console.log(username,password,selected)
}



    const data = [
        {key:'1', value:'Student',},
        {key:'2', value:'Teacher'},
        {key:'3', value:'Admin'},

    ]
    const navigation=useNavigation()
  return (
    <SafeAreaView>
    <TextInput
       style={styles.input}
      onChangeText={setusername}
      value={username}
    />
    <TextInput
      style={styles.input}
      onChangeText={setpassword}
      value={password}
      placeholder="useless placeholder"
    />
        <SelectList 
        setSelected={(val) => {setSelected(val) }} 
        
        data={data} 
        save="value"
    />
    <Button title="Submit"  onPress={()=>handleSubmit()}
       />
  </SafeAreaView>

  )
}
const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });