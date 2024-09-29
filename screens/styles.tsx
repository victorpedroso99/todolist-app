import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FFFFFF"
    },
    scrollContainer: {
      alignItems: "center",
      paddingVertical: 10,
      backgroundColor: "#FFFFFF"
    },
    taskContainer: {
      borderColor: "gray",
      borderWidth: 0.5,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginVertical: 5,
      width: "90%",
      padding: 10,
      borderRadius: 10,
      backgroundColor: "#FFFFFF"
    },
    formContainer: {
      width: "90%",
      alignItems: "center",
      backgroundColor: "#FFFFFF"
    },
    createTaskContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10,
      backgroundColor: "#FFFFFF"
    },
    textInput: {
      borderColor: "gray",
      borderWidth: 0.5,
      borderRadius: 10,
      backgroundColor: "#ffffff",
      paddingLeft: 10,
      paddingRight: 10,
      color: "#000000",
      flex: 1,
      marginRight: 10,
      width: "70%",
      height: 50,
      maxHeight: 60
    },
    addButtonContainer: {
      width: "30%",
    },
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalView: {
      maxHeight: "25%",
      width: "80%",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 20,
      padding: 25,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      width: "100%",
      marginTop: 15,
      backgroundColor: "#FFFFFF"
    },
    button: {
      borderRadius: 10,
      padding: 10,
      marginHorizontal: 5,
      width: "30%",
      marginTop: 20,
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    buttonDelete: {
      backgroundColor: "red",
    },
    buttonEdit: {
      backgroundColor: "green",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center",
    },
  });
  
  export default styles;