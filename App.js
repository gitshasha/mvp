import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./Components/Login";
import { StripeProvider } from "@stripe/stripe-react-native";

import React, { useContext } from "react";
import { Userprovider } from "./api/Userprovider";
import Dashboard from "./Components/Dashboard";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Userprovider>
      <StripeProvider publishableKey="pk_test_51Oy95WSHgYBnvLvBKKI8XL9WD0eBwuWxayyAG58u42tFfeoRLubNhNIzwBVKAQLDFYJ8OI1CVh0AUIKYrb1HFXRi00wRbcHwc5">
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Dash" component={Dashboard} />
          </Stack.Navigator>
        </NavigationContainer>
      </StripeProvider>
    </Userprovider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
