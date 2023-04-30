import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const TeamPage = () => {

  // sample data for team members
  const [teamMembers, setTeamMembers] = useState([
    {id: '1', name: 'MSD', role: 'Developer'},
    {id: '2', name: 'Sam', role: 'Designer'},
    {id: '3', name: 'Jadeja', role: 'Project Manager'},
    {id: '4', name: 'Murli', role: 'QA Tester'},
    {id: '5', name: 'Mike Hussey', role: 'Developer'},
    {id: '6', name: 'Shane Watson', role: 'Designer'},
  ]);

  // render team member item
  const renderItem = ({item}) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.role}>{item.role}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={teamMembers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
  name: {
    fontWeight: 'bold',
    color: '#E1701A',
    marginBottom: 10,
  },
  role: {
    color: '#E1701A',
  },
});

export default TeamPage;
