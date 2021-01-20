import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import Header from "./components/Header";
import Navbar from "./components/Navbar";

let titrePage = "BlackJack-App";


export default function App() {
  const [value, onChangeText] = React.useState('Entrez un mot un texte');
  return (
    <View style={styles.container}>
      <Navbar></Navbar>
      <Header title={titrePage}/>
      <View style={styles.body}>
        <Text></Text>
        <TextInput style={{height: 40, borderColor: "#AAA", 
        borderWidth: 1}} 
        onChangeText={text => onChangeText(text)}/> 
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  body: {
    justifyContent:"center",
    alignItems:"center",
    height:"100%",
  },
});
