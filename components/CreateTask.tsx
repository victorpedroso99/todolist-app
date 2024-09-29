import React, { useState } from 'react';
import { Alert, TextInput, View, Button } from 'react-native';
import styles from '../screens/styles';

type CreateTaskProps = {
  addTask: (value: string) => void;
};

const CreateTask: React.FC<CreateTaskProps> = ({ addTask }) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value.trim()) {
      Alert.alert("Alert", "The task cannot be blank!");
      return;
    }
    addTask(value);
    setValue("");
  };

  return (
    <View style={styles.createTaskContainer}>
      <TextInput
        style={styles.textInput}
        value={value}
        placeholder="Add a new task"
        onChangeText={setValue}
      />
      <View style={styles.addButtonContainer}>
        <Button onPress={handleSubmit} title={"Add"} />
      </View>
    </View>
  );
};

export default CreateTask;
