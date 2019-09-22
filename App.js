import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: enteredGoal}]);
  };

  return (
    <View style= {styles.screen}>
      <View style={styles.inputContainter}>
        <TextInput
        placeholder="Course goal"
        style={styles.input}
        onChangeText = {goalInputHandler}
        value={enteredGoal}
        />
        <Button title ='Add' onPress={addGoalHandler} />
      </View>
      <FlatList
        keyExtractor={(item, index)=> item.id}
        data={courseGoals}
        renderItem = {itemData => (
          <View style={styles.listItem}>
            <Text >{itemData.item.value}</Text>
          </View>
        )}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    padding: 50
  },
  inputContainter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth:1,
    padding:10
  },
  listItem: {
  padding: 10,
  marginVertical: 10,
  backgroundColor: '#ccc',
  borderColor: 'black',
  borderWidth: 1
  }
});
