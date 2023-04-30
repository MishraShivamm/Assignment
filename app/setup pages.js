import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const SetupPage = () => {
  // state variables
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [assignedTo, setAssignedTo] = useState('');

  // handler for submitting the form
  const handleSubmit = () => {
    // TODO: handle form submission
    console.log(`Title: ${title}`);
    console.log(`Description: ${description}`);
    console.log(`Date: ${date}`);
    console.log(`Time: ${time}`);
    console.log(`Assigned to: ${assignedTo}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Schedule a Meeting</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          style={styles.input}
          placeholder="Date (YYYY-MM-DD)"
          value={date}
          onChangeText={setDate}
        />
        <TextInput
          style={styles.input}
          placeholder="Time (HH:MM AM/PM)"
          value={time}
          onChangeText={setTime}
        />
        <TextInput
          style={styles.input}
          placeholder="Assigned to"
          value={assignedTo}
          onChangeText={setAssignedTo}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Schedule</Text>
        </TouchableOpacity>
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
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#E1701A',
    marginBottom: 20,
  },
  form: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
  },
  input: {
    backgroundColor: '#F2F2F2',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#E1701A',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SetupPage;
