import React, { useState } from "react";
import { View, Text, Button } from "react-native";

import { Calendar } from "react-native-calendars";
const Salary = () => {
  const [baseSalary, setBaseSalary] = useState(5000); // Monthly base salary
  const [overtimeHours, setOvertimeHours] = useState(10); // Overtime hours worked in a month
  const [bonus, setBonus] = useState(1220); // Bonus amount for the month

  const calculateSalary = () => {
    // Calculate overtime pay rate (example: 1.5 times the base hourly rate)
    const overtimePayRate = 1.5 * (baseSalary / (4 * 40)); // Assuming 40 hours per week

    // Calculate overtime pay
    const overtimePay = overtimeHours * overtimePayRate;

    // Calculate total salary including base salary, overtime pay, and bonus
    const totalSalary = baseSalary + overtimePay + bonus;

    return totalSalary;
  };
     const markedDates = {
       "2024-04-03": {
         marked: true,
         dotColor: "green",
         selected: true,
         selectedColor: "green",
       }, // Example: Present on March 25, 2024
       "2024-04-02": {
         marked: true,
         dotColor: "red",
         selected: true,
         selectedColor: "red",
       }, // Example: Absent on March 26, 2024
       // Add more marked dates as needed
     };
   const generateSundays = (year, month) => {
     const sundays = {};
     const daysInMonth = new Date(year, month, 0).getDate();
     for (let day = 1; day <= daysInMonth+1; day++) {
       const currentDate = new Date(year, month - 1, day);
       if (currentDate.getDay() === 1) {
         const dateString = currentDate.toISOString().split("T")[0];
         sundays[dateString] = { disabled: true, disableTouchEvent: true };
         
       }
     }
     Object.keys(markedDates).forEach((key) => {
       sundays[key]=markedDates[key]
     });
     console.log(sundays)
     return sundays;
   };
   // Get current year and month
   const currentDate = new Date();
   const currentYear = currentDate.getFullYear();
   const currentMonth = currentDate.getMonth() + 1;
  return (
    <View>
      <Calendar
        onDayPress={(day) => {
          console.log(day);
        }}
        markedDates={generateSundays(currentYear, currentMonth)}/>
        
      <Text>Base Salary: {baseSalary}</Text>
      <Text>Overtime Hours: {overtimeHours}</Text>
      <Text>Bonus: {bonus}</Text>
      <Text>Total Salary: {calculateSalary()}</Text>
      <Button
        title="Calculate Salary"
        onPress={() => alert(`Total Salary: $${calculateSalary()}`)}
      />
    </View>
  );
};

export default Salary;
