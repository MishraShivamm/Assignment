import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const EmployeeHome = ({ navigation }) => {

  const goToDashboard = () => {
    navigation.navigate('EmployeeDashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Employee Dashboard</Text>
      <TouchableOpacity style={styles.button} onPress={goToDashboard}>
        <Text style={styles.buttonText}>View Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F2E8',
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E1701A',
    marginBottom: 20
  },
  button: {
    backgroundColor: '#E1701A',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18
  }
});

export default EmployeeHome;
