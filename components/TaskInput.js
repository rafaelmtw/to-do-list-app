import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

import Input from "./Input";
import Card from "./Card";
import TitleText from "./TitleText";
import BodyText from "./BodyText";
import Quotes from "../assets/quotes";

const generateRandomQuote = () => {
  return Quotes[Math.floor(Math.random() * 25)];
};

const TaskInput = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  const [randomMotivationalQuote, setRandomMotivationalQuote] =
    useState(generateRandomQuote);

  const taskInputHandler = (enteredText) => {
    setEnteredTask(enteredText);
  };

  const addTaskHandler = () => {
    props.onAddTask(enteredTask);
    setEnteredTask("");
    setRandomMotivationalQuote(generateRandomQuote);
  };

  const resetInputHandler = () => {
    setEnteredTask("");
  };

  return (
    <Modal visible={props.visible} animationType="fade">
      <Card style={styles.quote}>
        <TitleText>A Motivational Quote:</TitleText>
        <BodyText>{randomMotivationalQuote}</BodyText>
      </Card>
      <View style={styles.inputContainer}>
        <Input
          placeholder="What do you want to do?"
          style={styles.input}
          blurOnSubmit
          onChangeText={taskInputHandler}
          value={enteredTask}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addTaskHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  quote: {
    marginHorizontal: "10%",
    marginTop: "10%",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    width: "45%",
    maxWidth: 200,
    textAlign: "center",
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export default TaskInput;
