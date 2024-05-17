import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../api/Userprovider";

import { useNavigation } from "@react-navigation/native";
export default function FeeManagement() {

  const { user } = useContext(UserContext);
  const [feedetails, setfeedetails] = useState();

   const navigation = useNavigation();
  const [transactions, settransactions] = useState([]);
  useEffect(() => {
    const feefunction = async () => {
      const details = await axios.get(
        `http://192.168.1.8:8001/api/student/studentfee/${user.student_id}`
      );
      if (details) {
        setfeedetails(details.data[0]);
      }
    };
    const feetransactions = async () => {
      const details = await axios.get(
        `http://192.168.1.8:8001/api/student/transactions/${user.student_id}`
      );
      if (details) {
        settransactions(details.data);
      }
    };
    feefunction();
    feetransactions();
  }, []);
  return (
    <View style={styles.totalcont}>
      <View style={styles.splitcont}>
        <View style={styles.half1}></View>
        <View style={styles.half2}></View>
        <View style={styles.middlecont}>
          <View style={styles.middlebox}>
            <Text style={styles.valuestyle}>
              {feedetails && feedetails["amount"]}
            </Text>
            <Text style={styles.textstyle}>Total </Text>
          </View>
          <View style={styles.middlebox}>
            <Text style={styles.valuestyle}>
              {" "}
              {feedetails && feedetails["remaining_amount"]}
            </Text>
            <Text style={styles.textstyle}>Pending </Text>
          </View>
          <View style={styles.middlebox}>
            <Text style={styles.valuestyle}>
              {feedetails && feedetails["amount_paid"]}
            </Text>
            <Text style={styles.textstyle}>Paid </Text>
          </View>
          <View style={styles.middlebox}>
            <Text style={styles.valuestyle}>
              {transactions && transactions.length}
            </Text>
            <Text style={styles.textstyle}>Transactions</Text>
          </View>
        </View>
      </View>

      <View style={styles.floatingcont}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Payment");
          }}
          style={styles.floatingbox}
        >
          <Text
            style={{
              height: "30%",
              width: "50%",
              fontSize: 20,
              fontWeight: "500",
            }}
          >
            Payment
          </Text>
          <View style={styles.sidearrow}>
            <Image
              style={{ height: "40%", width: "45%", alignItems: "center" }}
              source={require("../../assets/icons8-right-arrow-100.png")}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Transactions");
          }}
          style={styles.floatingbox}
        >
          <Text
            style={{
              height: "30%",
              width: "50%",
              fontSize: 20,
              fontWeight: "500",
            }}
          >
            Transactions
          </Text>
          <View style={styles.sidearrow}>
            <Image
              style={{ height: "40%", width: "45%", alignItems: "center" }}
              source={require("../../assets/icons8-right-arrow-100.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  totalcont: { height: "100%", width: "100%", alignItems: "center" },
  splitcont: { height: "40%", width: "100%" },
  half1: {
    height: "70%",
    width: "100%",
    backgroundColor: "#4dccff",
  },
  half2: { height: "30%", width: "100%" },
  middlecont: {
    position: "absolute",
    top: "35%",
    left: "15%",
    height: "60%",
    width: "70%",
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "center",
  },
  middlebox: {
    height: "45%",
    width: "45%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  valuestyle: {
    fontSize: 14,
    fontWeight: "500",
  },
  textstyle: {
    fontSize: 13,
    fontWeight: "500",
  },
  floatingcont: {
    height: "50%",
    width: "100%",
    justifyContent: "space-around",

    alignItems: "center",
  },
  floatingbox: {
    height: "40%",
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    
    backgroundColor:"white"
  },
  sidearrow: {
    height: "40%",
    width: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
});
