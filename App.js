import { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(entereredText) {
    setEnteredGoalText(entereredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} />
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text}/>;
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        />
        
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 25
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 4
  }
});
