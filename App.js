import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";

import TodoElement from "./components/TodoElement";

const { width, height } = Dimensions.get("window");

export default function App() {
  const [counter, setCounter] = useState(0);

  const [todoArray, setTodoArray] = useState([]);

  const [textInput, setTextInput] = useState("");

  const addTodo = (name) => {
    setTodoArray([...todoArray, [todoArray.length + 1, name, true]]);
    // console.log("counter", counter);
    setCounter(counter + 1);
  };

  const deleteItem = (id) => {
    //console.log("gege", id);
    setTodoArray(todoArray.filter((toDo) => toDo[0] !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.title}>{counter}</Text>
      </View>

      <FlatList
        keyExtractor={(item) => item[0]}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{ width: width, height: 2, backgroundColor: "#5edcff" }}
            ></View>
          );
        }}
        data={todoArray}
        renderItem={({ item }) => {
          return (
            <TodoElement
              deleteItem={(id) => deleteItem(id)}
              key={item[0]}
              content={item}
            />
          );
        }}
      />

      <View style={styles.savecontainer}>
        <TextInput
          placeholder="Yapılacak ..."
          onChangeText={(newValue) => {
            setTextInput(newValue);
          }}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={() => {
            addTodo(textInput);
          }}
        >
          <View style={styles.saveButton}>
            <Text style={{ color: "white", textAlign: "center", fontSize: 21 }}>
              Kaydet
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#242740",
  },
  saveButton: {
    backgroundColor: "#cddb6e",
    width: width - 60,
    alignSelf: "center",
    borderRadius: 15,
    height: 50,
    marginVertical: 15,
    justifyContent: "center",
  },
  input: {
    borderBottomWidth: 2,
    borderColor: "#85ccf2",
    height: 40,
  },
  innercontainer: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  savecontainer: {
    backgroundColor: "gray",
    height: 120,
    width: width - 30,
    borderRadius: 15,
    alignSelf: "center",
    marginBottom: 25,
  },
  title: {
    color: "#f2ff3b",

    fontWeight: "800",
    fontSize: 19,
  },
});
