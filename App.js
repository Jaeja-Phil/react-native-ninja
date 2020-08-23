import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'phil', id: '1' },
    { name: 'john', id: '2' },
    { name: 'mario', id: '3' },
    { name: 'yoojung', id: '4' },
    { name: 'james', id: '5' },
    { name: 'jessica', id: '6' },
    { name: 'ilhak', id: '7' },
  ]);

  const pressHandler = (id) => {
    setPeople((prevState) => {
      return prevState.filter((person) => person.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        numColumns={2}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <ScrollView>
        {people.map((person) => {
          return (
            <Text style={styles.item} key={person.key}>
              {person.name}
            </Text>
          );
        })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    margin: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
  },
});
