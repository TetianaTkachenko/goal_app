import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [goalList, setGoalList] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function addGoalHandler (enteredGoalText) {
    setGoalList((list) => [
      ...list,
      {text: enteredGoalText, id: Math.random().toString()}
    ])
    setModalIsVisible(false)
  }
  function deleteGoalHandler (id) {
    setGoalList((list) => {
      return list.filter((goal) => goal.id !== id)
    })
  }
  function startAddGoalHandler () {
    setModalIsVisible(true)
  }
  function endAddGoalHandler () {
    setModalIsVisible(false)
  }

  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      <Button 
        title='Add New Goal' 
        onPress={startAddGoalHandler}
        color='#a065ec' 
      />
      { modalIsVisible && (
        <GoalInput 
          onAddGoal={addGoalHandler} 
          onCancel={endAddGoalHandler}
          visible={modalIsVisible} 
        />
      )}
      <View style={styles.goalsContainer}>
        <FlatList 
          data={goalList} 
          renderItem={(itemData) => {
            return (
              <GoalItem 
                deleteGoalHandler={deleteGoalHandler} 
                text={itemData.item.text}
                id={itemData.item.id} 
              />
            )
          }} 
          alwaysBounceVertical={false} 
          keyExtractor={(item, index) => {
            return item.id
          }} 
        />
      </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  }
});
