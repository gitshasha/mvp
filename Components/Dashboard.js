import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../api/Userprovider";
import StudentDashboard from "./Students/StudentDashboard";
import TeacherDashboard from "./Teacher/TeacherDashboard";
import Nav from "./Students/Nav";
import Account from "./Students/Account";
import { NavigationContainer } from "@react-navigation/native";
import Schedule from "./Students/Schedule";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdminDashboard from "./Admin/AdminDashboard";
import Login from "./Login";
import { useNavigation } from "@react-navigation/native";
import SendNotifications from "./Admin/SendNotifications";
import Mynotify from "./Students/Mynotify";
import Quiz from "./Teacher/Activity/Quiz";
import EditAttendance from "./Teacher/Activity/EditAttendance";
import Assignment from "./Teacher/Activity/Assignment";
import Salary from "./Teacher/Activity/Salary";
import Payment from "./Students/Payment";
import StudentAssign from "./Students/StudentAssign";
import StudentQuiz from "./Students/StudentQuiz";
import Classes from "./Students/Classes";
import Studattendance from "./Students/Studattendance";
import TeacherNotify from "./Teacher/Notify/TeacherNotify";
import SendNotify from "./Teacher/Notify/SendNotify";
import TeacherProfile from "./Teacher/TeacherProfile";
import TeacherSchedule from "./Teacher/TeacherSchedule";
import StudentPost from "./Students/StudentPost";
import FeeManagement from "./Students/FeeManagement";
import Transactions from "./Students/Transactions";
import Result from "./Students/Result";
import AssignmentPage from "./Students/AssignmentPage";
const Stack = createNativeStackNavigator();
export default function Dashboard() {
  const { user } = useContext(UserContext);
  const navigation = useNavigation();
  switch (user.role) {
    case "Student":
      return (
        <SafeAreaView
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              maxHeight: 680,
            }}
          >
            <Stack.Navigator
              initialRouteName="Login"
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen name="Home" component={StudentDashboard} />
              <Stack.Screen name="StudentAcc" component={Account} />
              <Stack.Screen name="Schedule" component={Schedule} />
              <Stack.Screen name="Payment" component={Payment} />
              <Stack.Screen name="Transactions" component={Transactions} />
              <Stack.Screen name="Feemanagement" component={FeeManagement} />
              <Stack.Screen name="StudentNotif" component={Mynotify} />
              <Stack.Screen name="Studattendance" component={Studattendance} />
              <Stack.Screen name="Studentclasses" component={Classes} />
              <Stack.Screen name="Studentpost" component={StudentPost} />
              <Stack.Screen name="Studentquiz" component={StudentQuiz} />
              <Stack.Screen name="Studentassignment" component={AssignmentPage} />
              <Stack.Screen name="result" component={Result} />
              <Stack.Screen name="Assignment" component={StudentAssign} />
            </Stack.Navigator>
          </View>
          <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
            <Nav userrole={user.role}></Nav>
          </View>
        </SafeAreaView>
      );
    case "Teacher":
      return (
        <SafeAreaView
          style={{
            flex: 1,
          }}
        >
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={TeacherDashboard} />
            <Stack.Screen name="Assignment" component={Assignment} />

            <Stack.Screen name="Createquiz" component={Quiz} />

              <Stack.Screen name="TeacherAcc" component={TeacherProfile} />
            <Stack.Screen name="TeacherNotification" component={TeacherNotify} />
            
            <Stack.Screen name="TeacherSchedule" component={TeacherSchedule} />
             <Stack.Screen name="SendNotify" component={SendNotify} />

            <Stack.Screen name="Salary" component={Salary} />
            <Stack.Screen name="Quiz" component={Quiz} />
            <Stack.Screen name="Attendance" component={EditAttendance} />
          </Stack.Navigator>
          <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
            <Nav userrole={user.role}></Nav>
          </View>
        </SafeAreaView>
      );
    case "Admin":
      return (
        <SafeAreaView>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={AdminDashboard} />
            <Stack.Screen name="StudentNotif" component={SendNotifications} />
          </Stack.Navigator>
          <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
            <Nav></Nav>
          </View>
        </SafeAreaView>
      );
    default:
      return navigation.navigate("Login");
  }
}
