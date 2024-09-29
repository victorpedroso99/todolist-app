// Task.tsx
import React from "react";
import { TouchableOpacity, Button, View } from "react-native";
import { Text } from "../components/Themed";
import Icons from "react-native-vector-icons/FontAwesome";
import styles from "../screens/styles";

export type TaskProps = {
  task: {
    id: number;
    description: string;
    status: number;
  };
  index: number;
  onCompleted: (index: number) => void;
  onSelect: (index: number) => void;
  onPress: (task: any) => void;
  selected: boolean;
};

const Task: React.FC<TaskProps> = (props) => {
  const isDone = props.task.status === 1;

  return (
    <TouchableOpacity
      style={styles.taskContainer}
      onPress={() => props.onPress(props.task)}
    >
      <Text onPress={() => props.onSelect(props.index)} style={{ color: props.selected ? "blue" : "black" }}>
        {isDone ? (
          <Icons name="check-square-o" size={30} color="black" />
        ) : (
          <Icons name="square-o" size={30} color="black" />
        )}
      </Text>
      <Text
        style={{
          textDecorationLine: isDone ? "line-through" : "none",
          flex: 1,
          marginHorizontal: 10,
          color: "#000000",
        }}
      >
        {props.task.description}
      </Text>
      <Button onPress={() => props.onCompleted(props.index)} title={isDone ? "Undone" : "Done"} />
    </TouchableOpacity>
  );
};

export default Task;
