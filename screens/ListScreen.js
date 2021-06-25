import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

import TaskItem from "../components/TaskItem";
import TaskInput from "../components/TaskInput";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";

export default function App() {
  const [listTasks, setListTasks] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addTaskHandler = (taskTitle) => {
    if (taskTitle.length === 0) {
      return;
    }
    setListTasks((currentTasks) => [
      ...currentTasks,
      { id: Math.random().toString(), value: taskTitle },
    ]);
    setIsAddMode(false);
  };

  const removeTaskHandler = (taskId) => {
    setListTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== taskId);
    });
  };

  const cancelTaskAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <View style={{ margin: 10 }}>
        <TitleText style={styles.title}>Upcoming tasks</TitleText>
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={listTasks}
        renderItem={(itemData) => (
          <TaskItem
            id={itemData.item.id}
            onDelete={removeTaskHandler}
            title={itemData.item.value}
          />
        )}
      ></FlatList>
      <View style={styles.button}>
        <MainButton onPress={() => setIsAddMode(true)}>Add New Task</MainButton>
      </View>
      <TaskInput
        visible={isAddMode}
        onAddTask={addTaskHandler}
        onCancel={cancelTaskAdditionHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
  },
  title: {
    color: "black",
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
  },
});
