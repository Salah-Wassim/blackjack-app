import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Header from "./components/Header";

let titrePage = "BlackJack-App";

export default function App() {

  const [contenuBouton, setContenuBouton] = useState(false);

  const handlePress = function (){
    setContenuBouton(!contenuBouton)
    //if (contenuBouton == true){
    //  setContenuBouton(false);
    //}else{
    //  setContenuBouton(true);
    //}
  }
  
  let titreBouton = "Afficher";

  if(contenuBouton === true){  //Ecriture ternaire  : afficher === true ? "Cacher" : "Afficher"
    titreBouton = "Cacher"
  }
    
  return (
    <View style={styles.container}>
      <Header title={titrePage}/>
      <View style={styles.body}>

        {contenuBouton == true &&
          <Text>coucou</Text>
        }
        
        <Button title={titreBouton} onPress={handlePress}></Button>
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
