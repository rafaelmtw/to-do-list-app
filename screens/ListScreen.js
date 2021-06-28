import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

import TaskItem from "../components/TaskItem";
import TaskInput from "../components/TaskInput";
import MainButton from "../components/MainButton";
import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
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

  let content = (
    <View style={{ flex: 2, marginTop: 50, alignItems: "center" }}>
      <TitleText>You have nothing to do!</TitleText>
      <BodyText>Start listing your upcoming tasks</BodyText>
    </View>
  );

  if (listTasks.length > 0) {
    content = (
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
    );
  }

  return (
    <View style={styles.screen}>
      <View style={{ margin: 10 }}>
        <TitleText style={styles.title}>My Tasks</TitleText>
      </View>
      {content}
      <TaskInput
        visible={isAddMode}
        onAddTask={addTaskHandler}
        onCancel={cancelTaskAdditionHandler}
      />
      <View style={styles.button}>
        <MainButton onPress={() => setIsAddMode(true)}>Add New Task</MainButton>
      </View>
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
    justifyContent: "flex-end",
  },
});
