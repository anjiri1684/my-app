import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App(entredGoalText) {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler() {
    setCourseGoals((courseGoals) => [
      ...courseGoals,
      { text: entredGoalText, key: Math.random().toString() },
    ]);
    setEnteredGoalText("");
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemdata) => {
            return <GoalItem text={itemdata.item.text} />;
          }}
          keyExtractor={(item) => item.key}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 5,
  },
});
