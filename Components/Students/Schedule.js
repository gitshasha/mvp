import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Calendar, Agenda } from "react-native-calendars";

export default function Schedule() {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [items, setItems] = useState({});

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        {item.name && <Text>{item.name}</Text>}
       
      </View>
    );
  };

  const renderEmptyDate = () => {
    console.log("SFsfsfsf")
    return (
      <View style={styles.emptyDate}>
        <Text>No events for this date</Text>
      </View>
    );
  };

  const loadItemsForMonth = (month) => {
    // Load items for the specified month
    // You can fetch data from a server or local storage here
    // Update the 'items' state with the loaded items
    const exampleData = {
      "2024-05-14": [
        { name: "Meeting with Client" },
        { name: "Lunch with Team" },
      ],
      "2024-05-13": [{ name: "Workshop" }, { name: "Dinner with Friends" }],
      "2024-05-12": [
        { name: "Meeting with Client" },
        { name: "Lunch with Team" },
      ],
      "2024-05-15": [
  
      ],
      // Add more items as needed
    };

    // Update the items state with the fetched data
    setItems(exampleData);
  };
  return (
    <View style={styles.container}>
  
      <Agenda
        items={items}
        renderEmptyDate={renderEmptyDate} // Corrected
        renderItem={renderItem}
        loadItemsForMonth={loadItemsForMonth}
        pastScrollRange={2}
        futureScrollRange={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});
