// pk_test_51Oy95WSHgYBnvLvBKKI8XL9WD0eBwuWxayyAG58u42tFfeoRLubNhNIzwBVKAQLDFYJ8OI1CVh0AUIKYrb1HFXRi00wRbcHwc5;
// sk_test_51Oy95WSHgYBnvLvB7djpRYD4fmiT8nCfNEnRkUTvQxxpbiWqlonxw4QtSAmQxs1gpZLEqN9UjVDqjZ3yPx30bx5w00k487s9iS;
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { useContext } from "react";
import { UserContext } from "../../api/Userprovider";
import { Restart } from "fiction-expo-restart";
import { useStripe } from "@stripe/stripe-react-native";
export default function Payment() {
  const stripe = useStripe();
  const [fee, setfee] = useState(40000);
  const [amt, setamt] = useState(0);
  const [feedetails, setfeedetails] = useState();
const [paytokenid,setpaytokenid]=useState()
  const { user } = useContext(UserContext);

useEffect(()=>{
  const feefunction=async()=>{
    const details = await axios.get(
      `http://192.168.1.8:8001/api/student/studentfee/${user.student_id}`
    );
    if(details){
      setfeedetails(details.data[0])}
  }
  feefunction();
},[])
  const handlepost = async () => {
 
    try {
      
      if (
        (!feedetails["remaining_amount"] &&
          amt > feedetails["remaining_amount"]) ||
        amt <=0 
      ) {
        console.log("try again");
        return
      }

      const respo = await axios
        .post("http://192.168.1.8:8001/api/student/payment", {
          Feeamount: amt,
        })
       
      if (!respo) {
        console.log("errooo");
      }
      const data = await respo.data;
      const initSheet = await stripe
        .initPaymentSheet({
          paymentIntentClientSecret: data.paymentIntent.client_secret,
          merchantDisplayName: "SHASHANK",
        })

      if (initSheet.error) {
        return;
      }
      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret: data.paymentIntent.client_secret,
      });
      console.log(presentSheet);
      if (presentSheet.error) {
        console.error(presentSheet.error);
        return;
      }
      
      console.log("COMPLETED", data.paymentIntent.id);
      setpaytokenid(data.paymentIntent.id);
      await axios
        .post("http://192.168.1.8:8001/api/student/status", {
          student_id: user.student_id,

          payid: data.paymentIntent.id,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={{ alignItems: "center" }}>
      <View style={style.cont1}>
        <Text style={{ fontSize: 30, fontWeight: "500" }}>
          {" "}
          {feedetails && feedetails["amount"]}rs{" "}
        </Text>
        <Text>
          {" "}
          Remaining Fee amount:{feedetails &&
            feedetails["remaining_amount"]}{" "}
        </Text>
      </View>
      <View style={style.cont2}>
        <TouchableOpacity
          onPress={() => {
            setamt(feedetails["remaining_amount"]);
            handlepost();
          }}
          style={style.options}
        >
          <Text style={{ fontSize: 20, fontWeight: "500" }}> Full Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.options}
          onPress={() => {
            setamt(0);
           
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500" }}>
            {" "}
            Custom Payment
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        keyboardType="numeric"
        placeholder="Fee(Min Amt 5000)"
        value={amt.toString()}
        onChangeText={setamt}
      />
      <Button onPress={handlepost} title="Pay" />
    </View>
  );
}
const style = StyleSheet.create({
  cont1: {
    height: 140,
    width: 300,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  cont2: {
    height: 300,
    width: 330,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  options: {
    height: 100,
    width: 330,
    backgroundColor: "pink",
    borderRadius: 10,
  },
});
