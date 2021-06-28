import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Card from "./Card";
import { MaterialIcons } from "@expo/vector-icons";

const TaskItem = (props) => {
  return (
    <Card style={styles.listItem}>
      <View style={styles.task}>
        <Text>{props.title}</Text>
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
          <MaterialIcons
            name="check-box-outline-blank"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
  },
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default TaskItem;
