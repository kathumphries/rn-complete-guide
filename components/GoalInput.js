import React, { useState } from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Modal
} from 'react-native';


const GoalInput = props => {

  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }
  return (
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainter}>
      <TextInput
        placeholder="Course goal"
        style={styles.input}
        onChangeText = {goalInputHandler}
        value={enteredGoal}
      />
        <Button title ='Add' onPress={() => props.onAddGoal(enteredGoal)}/>
    </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
})

export default GoalInput;