import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import ProductCard from '../components/ProductCard'
import React from 'react';

export default function Index() {

  const [word, setWord] = React.useState("");

  const onChangeFunc = (text) => {
    setWord(text)
  }

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.navbar_text}>PATIKASTORE</Text>
        <TextInput onChangeText={onChangeFunc} placeholder="Ara..." style={styles.text_input} />
      </View>

      <FlatList
      data={require("../assets/db.json").filter(i => i.title.includes(word))}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      key={2}
      renderItem={({ item }) => (
        <ProductCard item={item}/>
      )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },

  inner_container: {
    paddingBottom: 5,
  },

  navbar_text: {
    color: 'purple',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'white'
  },

  text_input: {
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    height: 40,
    padding: 10,
    color: 'black',
    fontSize: 18
  }
})