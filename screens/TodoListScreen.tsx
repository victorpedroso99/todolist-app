import * as React from "react";
import { View } from "../components/Themed";
import styles from "./styles";
import Todo from "../components/Todo";
import Task from "../components/Task";

export type TaskType = {
  id: number;
  description: string;
  status: number;
};

const API_URL = "https://todolistapp-agbqetcef4bwcpcu.brazilsouth-01.azurewebsites.net/api/v1/Task";

export default function TodoListScreen() {
  return (
    <View style={styles.container}>
      <Todo />
    </View>
  );
}

function TaskComponent(props: {
  task: TaskType;
  index: number;
  onCompleted: (index: number) => void;
  onSelect: (index: number) => void;
  onPress: (task: TaskType) => void;
  selected: boolean;
}) {
  return (
    <Task
      task={props.task}
      index={props.index}
      onCompleted={props.onCompleted}
      onSelect={props.onSelect}
      onPress={props.onPress}
      selected={props.selected}
    />
  );
}


