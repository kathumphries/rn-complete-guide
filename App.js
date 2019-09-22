import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, Button, View, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoadl] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoadl(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
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
      <ScrollView>
        {courseGoals.map((goal)=> <View key={goal} style={styles.listItem}><Text >{goal}</Text></View>)}
      </ScrollView>

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
