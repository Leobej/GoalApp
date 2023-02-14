import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import { GoalInput } from './assets/components/GoalInput';
import { GoalItem } from './assets/components/GoalItem';
export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  }

  const endGoalHandler = () => {
    setModalIsVisible(false);
  }

  const addGoalHandler = (enteredGoalText) => {
    if (enteredGoalText !== '')
      setCourseGoals(currentGoalsCourse => [...currentGoalsCourse, { text: enteredGoalText, id: Math.random().toString() }])
    endGoalHandler();
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals(currentGoalsCourse => {
      return currentGoalsCourse.filter((goal) => { return goal.id !== id })
    })

  }

  return (
    <><StatusBar style='light'/>
      <View style={styles.appContainer}>
        <Button title="Add new Goal" color="#5e0acc" onPress={startAddGoalHandler} />
        <GoalInput onAddGoal={addGoalHandler} onCancelGoalHandler={endGoalHandler} visible={modalIsVisible}></GoalInput>
        <View style={styles.goalsContainer}>
          <FlatList alwaysBounceVertical={false} data={courseGoals}
            keyExtractor={(item, index) => {
              return item.id
            }}

            renderItem={(itemData) => {
              return (
                <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler} />
              )
            }}>

          </FlatList>
        </View>
      </View ></>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15
  },


  goalsContainer: {
    flex: 4,
  },

});
