import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header";

let titrePage = "BlackJack-App";

export default function App() {

  const [contenuBouton, setContenuBouton] = useState(" ");

  const handlePress1 = function (){
    setContenuBouton("Page1")
  }
  const handlePress2 = function (){
    setContenuBouton("Page2")
  }
  const handlePress3 = function (){
    setContenuBouton("Page3")
  }
    
  return (
    <View style={styles.container}>
      <Header title={titrePage}/>
      <View style={styles.body}>

        {contenuBouton === "Page1" &&
          <Text>page1</Text>
        }

        {contenuBouton === "Page2" &&
          <Text>page2</Text>
        }

        {contenuBouton === "Page3" &&
          <Text>page3</Text>
        }
        
        <Button title="Page1" onPress={handlePress1}></Button>
        <Button title="Page2" onPress={handlePress2}></Button>
        <Button title="Page3" onPress={handlePress3}></Button>
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
