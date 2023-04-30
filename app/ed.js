import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EmployeeDashboard = () => {

  // state variables
  const [attendance, setAttendance] = useState([]);
  const [leaves, setLeaves] = useState([]);
  const [paidLeaves, setPaidLeaves] = useState([]);
  const [salary, setSalary] = useState([]);
  const [workPercentage, setWorkPercentage] = useState(0);

  useEffect(() => {
    // fetch employee attendance, leaves, paid leaves, salary, and work percentage from API
    // set the state variables accordingly
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Attendance:</Text>
        <Text style={styles.value}>{attendance.length} days</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Leaves:</Text>
        <Text style={styles.value}>{leaves.length} days</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Paid Leaves:</Text>
        <Text style={styles.value}>{paidLeaves.length} days</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Salary:</Text>
        <Text style={styles.value}>${salary}</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Work Percentage:</Text>
        <Text style={styles.value}>{workPercentage}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F2E8',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    color: '#E1701A',
    marginBottom: 10,
  },
  value: {
    fontSize: 20,
    color: '#E1701A',
  },
});

export default EmployeeDashboard;
