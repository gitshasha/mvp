import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { useContext } from "react";
import { UserContext } from "../../api/Userprovider";
export default function Transactions() {
  const [transactions, settransactions] = useState([]);

  const { user } = useContext(UserContext);
  useEffect(() => {
    const feetransactions = async () => {
      const details = await axios.get(
        `http://192.168.1.8:8001/api/student/transactions/${user.student_id}`
      );
      if (details) {
        console.log(details.data);
        settransactions(details.data);
      }
    };
    feetransactions();
  }, []);
  return (
    <View>
      <Text>Transactions</Text>
      {transactions && transactions.map((data, ind) => (
        <View key={ind}>
          <Text>{data.amount}</Text>
          <Text>{data.payment_date}</Text>

          <Text>{data.payment_id}</Text>
        </View>
      ))}
    </View>
  );
}
