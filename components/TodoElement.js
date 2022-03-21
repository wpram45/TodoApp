import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

const TodoElement = ({ content, deleteItem }) => {
  const [active, setActive] = useState(content[2]);

  return (
    <TouchableOpacity
      onPress={() => {
        setActive(false);
      }}
      onLongPress={() => {
        deleteItem(content[0]);
      }}
    >
      <View style={[active ? styles.active : styles.deactive]}>
        <Text style={active ? styles.ActiveText : styles.DeactiveText}>
          {content[1]}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  active: {
    marginTop: 5,
    backgroundColor: "#196e23",
    height: height / 12,
    marginHorizontal: 9,
    justifyContent: "center",
    borderRadius: 10,
    padding: 15,
  },
  deactive: {
    marginTop: 5,
    backgroundColor: "#757778",
    height: height / 12,
    fontSize: 19,
    justifyContent: "center",
  },
  ActiveText: {
    color: "white",
  },
  DeactiveText: {
    color: "white",

    textDecorationLine: "line-through",
  },
});

export default TodoElement;
