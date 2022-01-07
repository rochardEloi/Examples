import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import DataStorage from './data';
 
export default function App() {
  const [document,setDocument] = useState("Undefined");
  let data = new DataStorage("machin");
  useEffect(async ()=>{
    
        let json_data = JSON.stringify({
          nom : "Eloi 26",
          prenom:"Rochard"
        })
        data.storeUserSession(json_data);
  })
  return (
    <View style={styles.container}>

    
      <Text>My document : {document}</Text>
      <Button
        title = "Save Document"
        onPress={async ()=>{
           var retrived = await data.retrieveUserSession();
           var data_ = JSON.parse(retrived);
           setDocument(data_.nom)
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
