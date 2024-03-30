import { View, Text, TouchableOpacity,StyleSheet, Button,ScrollView } from 'react-native'
import React, { useState } from 'react'

export default function EditAttendance() {
    const opt=["P","A"]
    const [attendstate,setattendstate]=useState("P")
    const [allattend,setallattend]=useState(0)
    const [students, setstudents] = useState([
      {
        roll: 2,
        name: "Sha",
        attend: "P",
      },
      {
        roll: 3,
        name: "Karan",
        attend: "P",
      },
      {
        roll: 4,
        name: "Shank",
        attend: "P",
      },
      {
        roll: 5,
        name: "Arjun",
        attend: "P",
      },
        {
        roll: 5,
        name: "Bheem",
        attend: "P",
      },
  
  
    ]);
    const handlePress = (index) => {
      setstudents((prevStudents) => {
        const updatedStudents = [...prevStudents]; // Create a copy of the students array
        const student = updatedStudents[index];
        if (student.attend === "P") {
          updatedStudents[index] = { ...student, attend: "A" }; 
        // Update the attendance value
        }
        else{
           updatedStudents[index] = { ...student, attend: "P" };
        
        }

        return updatedStudents; // Return the updated array
      });
    };
const submithandle=()=>{
  setallattend(students.filter((student) => student.attend === "P").length);
}
;
  return (
     <ScrollView>
    <View style={{alignItems:"center"}}>
      <View style={{flexDirection:"row",justifyContent:"space-evenly",borderBottomWidth:2,borderColor:"grey",width:330}}>
        <Text style={{height:40,width:100}}>27-Mar-24</Text>
        
        <View style={{height:40,width:3,backgroundColor:"grey"}}></View>
        <Text style={{height:40,width:100,}}>Class II-B</Text>
      </View>



      <View style={[styles.attendcont]}>
        {students.map((data, index) => (
          <View style={[styles.studentbox]} key={index}>
            <View>
              
              <Text style={{fontSize:20}}>{data.name}</Text>
              <Text>Roll no:{data.roll}</Text>
            </View>

            <TouchableOpacity
              style={{
                height: 35,
                width: 90,
                borderRadius:10,
                backgroundColor: data.attend == "P" ? "green" : "red",
                alignItems: "center",
                justifyContent:"space-around"
              }}
              onPress={() => handlePress(index)}
            >
              <Text style={{  alignItems: "center",color:"white",fontSize:15,fontWeight:700 }}>
                {data.attend=="P"?"present":"absent"}
              </Text>
             
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <Button
        title="Submit"
        onPress={() => {
          submithandle();
        }}
      />
      <Text>
        {allattend}/{students.length}
      </Text>
    </View>
     </ScrollView>
  )
}
const styles = StyleSheet.create({
  attendcont: {
    width: 360,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  studentbox: {
    height: 70,
    width: 330,
    alignItems: "center",
    justifyContent: "space-between",
flexDirection:"row",
paddingLeft:30,
paddingRight:30,
margin:10,
borderRadius:10,
    backgroundColor: "#e8e9eb",
  },
})