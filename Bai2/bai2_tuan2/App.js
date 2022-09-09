import React, { useState } from 'react';
import { Text, View, StyleSheet,TextInput,Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {

  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [tam, setTam] = useState('');
 
  const acc = [{user:'mot', pass:'1'},{user:'hai', pass:'2'},{user:'ba', pass:'3'}]


  return (
    <View >
    <Text>UserName</Text>
    <TextInput
        style={{Width: 40},{borderWidth:1}}
        placeholder=""
        onChangeText={newText => setText(newText)}
        
    />
    <Text>Password</Text>
    <TextInput
        style={{Width: 40},{borderWidth:1}}
        placeholder=""
        onChangeText={newText2 => setText2(newText2)}
        
    />
  <Text> </Text>
    <Button
      title="show"
      style={{Width: 40}}
      onPress={ ()=>{ 
        var t = false
        for(var i = 0 ; i<acc.length ; i++){
         
          if (acc[i].user == text && acc[i].pass == text2 )
            t = true
        }
        if(t){
            setTam(text)
          }else{
            setTam("Sai")
          }

      } }
      
    />
  <Text style={{padding: 10, fontSize: 42}}>
          {
            title = tam 
          }
  </Text>


    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: '#ecf0f1',
//     padding: 8,
//   },
//   paragraph: {
//     margin: 24,
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });
