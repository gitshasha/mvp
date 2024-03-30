import { View, Text } from 'react-native'
import React from 'react'
import { Calendar} from 'react-native-calendars'
export default function Schedule() {
  return (
    <View>       
      <Text>Schedule</Text>
      <Calendar onDayPress={(day)=>{console.log(day)}} />
    </View>
  )
}