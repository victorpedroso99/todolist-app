import axios from 'axios';
import { Alert } from 'react-native';
import { TaskType } from '../screens/TodoListScreen';

const API_URL = "https://todolistapp-agbqetcef4bwcpcu.brazilsouth-01.azurewebsites.net/api/v1/Task";

export const editTask = async (
  currentTask: TaskType | null, 
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>, 
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (!currentTask) return;

  const updatedTask = { 
    id: currentTask.id, 
    description: currentTask.description, 
    status: currentTask.status 
  };

  try {
    await axios.put(`${API_URL}/${currentTask.id}`, updatedTask);
    setTasks((prevTasks) => 
      prevTasks.map((task) => (task.id === currentTask.id ? updatedTask : task))
    );
    Alert.alert("Success", "Task updated successfully!");
    setModalVisible(false);
  } catch (err) {
    Alert.alert("Error", "Failed to update task");
  }
};
