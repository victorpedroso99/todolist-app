import React, { useState, useEffect } from "react";
import { View, ScrollView, Modal, Pressable, TextInput, Alert, ActivityIndicator } from "react-native";
import { Text } from "../components/Themed";
import axios from "axios";
import styles from "../screens/styles";
import CreateTask from "../components/CreateTask";
import { editTask } from "../components/TaskActions";
import Task, { TaskProps } from "./Task";

const API_URL = "https://todolistapp-agbqetcef4bwcpcu.brazilsouth-01.azurewebsites.net/api/v1/Task";

const Todo: React.FC = () => {
  const [tasks, setTasks] = useState<TaskProps['task'][]>([]);
  const [selectedTasks, setSelectedTasks] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [currentTask, setCurrentTask] = useState<TaskProps['task'] | null>(null);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL);
      const fetchedTasks = response.data.map((task: any) => ({
        id: task.id,
        description: task.description,
        status: task.status,
      }));
      setTasks(fetchedTasks);
    } catch (err) {
      setError("Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (description: string) => {
    const newTask = { description, status: 0 };
    try {
      const response = await axios.post(API_URL, newTask);
      setTasks((prevTasks) => [...prevTasks, { id: response.data.id, ...newTask }]);
      Alert.alert("Success", "Task added successfully!");
    } catch (err) {
      Alert.alert("Error", "Failed to add task");
    }
  };

  const completeTask = async (index: number) => {
    const task = tasks[index];
    const newStatus = task.status === 1 ? 0 : 1;
    try {
      await axios.patch(`${API_URL}/${task.id}`, { status: newStatus });
      setTasks((prevTasks) =>
        prevTasks.map((t, i) => (i === index ? { ...t, status: newStatus } : t))
      );
      Alert.alert("Success", `Task ${newStatus === 1 ? "completed" : "undone"}`);
    } catch (err) {
      Alert.alert("Error", "Failed to update task status");
    }
  };

  const toggleSelectTask = (index: number) => {
    setSelectedTasks((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  const deleteTask = async (task: TaskProps['task']) => {
    try {
      await axios.delete(`${API_URL}/${task.id}`);
      setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
      setModalVisible(false);
      Alert.alert("Success", "Task deleted successfully!");
    } catch (err) {
      Alert.alert("Error", "Failed to delete task");
    }
  };

  const openTaskModal = (task: TaskProps['task']) => {
    setCurrentTask(task);
    setModalVisible(true);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={{ color: "#000000" }}>Loading tasks...</Text>
      </View>
    );
  }

  if (error) {
    return <Text style={{ color: "#000000" }}>{error}</Text>;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {tasks.map((task, index) => (
          <Task
            onCompleted={completeTask}
            onSelect={toggleSelectTask}
            onPress={openTaskModal}
            task={task}
            index={index}
            key={task.id}
            selected={selectedTasks.includes(index)}
          />
        ))}
      </ScrollView>
      <View style={styles.formContainer}>
        <CreateTask addTask={addTask} />
      </View>

      {currentTask && (
        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
          <Pressable style={styles.modalContainer} onPress={() => setModalVisible(false)}>
            <Pressable style={styles.modalView} onPress={() => {}}>
              <TextInput
                style={styles.textInput}
                value={currentTask.description}
                onChangeText={(text) => setCurrentTask({ ...currentTask, description: text })}
              />

              <View style={styles.buttonContainer}>
                <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(false)}>
                  <Text style={styles.textStyle}>Close</Text>
                </Pressable>
                <Pressable style={[styles.button, styles.buttonDelete]} onPress={() => deleteTask(currentTask)}>
                  <Text style={styles.textStyle}>Delete</Text>
                </Pressable>
                <Pressable style={[styles.button, styles.buttonEdit]} onPress={() => editTask(currentTask, setTasks, setModalVisible)}>
                  <Text style={styles.textStyle}>Edit</Text>
                </Pressable>
              </View>
            </Pressable>
          </Pressable>
        </Modal>
      )}
    </View>
  );
};

export default Todo;
