import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Header from "./components/Header";
import Navbar from "./components/Navbar";

let titrePage = "BlackJack-App";

const pages = [
  {
    id : "page1",
    title : "Page1",
  },
  {
    id : "page2",
    title : "Page2",
  },
  {
    id : "page3",
    title : "Page3",
  },
];

export default function App() {

  const [page, setPage] = useState("page1");
  
  let Page = [];
  let button = [];
  for(let i = 0; i<pages.length; i++){
    if(pages[i].id === page){
      Page.push(<Text>{pages[i].id}</Text>)
    }
    button.push(<Button onPress={function(){
      setPage(pages[i].id)
    }} title={pages[i].title}></Button>)
  };

  return (
    <View style={styles.container}>
      <Navbar></Navbar>
      <Header title={titrePage}/>
      <View style={styles.body}>
        {Page}
        {button}
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
