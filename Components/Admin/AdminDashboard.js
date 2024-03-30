import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SendNotifications from './SendNotifications'

export default function AdminDashboard() {
  return (
    <SafeAreaView>
      <Text>AdminDashboard</Text>
      <SendNotifications></SendNotifications>
    </SafeAreaView>
  )
}