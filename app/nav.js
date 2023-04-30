import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import EmployeeDashboard from './EmployeeDashboard';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Employee Dashboard" component={EmployeeDashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
