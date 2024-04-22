import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import Header from "./Header";
import ListItem from "./ListItem";
import AddItem from "./AddItem";

const App = () => {
  const [items, setItems] = useState([
    { id: Math.random().toString(), text: "Milk" },
    { id: Math.random().toString(), text: "Eggs" },
    { id: Math.random().toString(), text: "Bread" },
    { id: Math.random().toString(), text: "Butter" },
    { id: Math.random().toString(), text: "Juice" },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert("❗Enter item to add", " Item name cannot be empty.", [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "OK" },
      ]);
      return;
    } else {
      setItems((prevItems) => {
        return [{ id: Math.random().toString(), text }, ...prevItems];
      });
    }
  };

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Header title="🛒 Shopping List..." />
        <AddItem addItem={addItem} />
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <ListItem item={item} deleteItem={deleteItem} />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: "white",
  },
});

export default App;
