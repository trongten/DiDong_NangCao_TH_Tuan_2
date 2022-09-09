import React, { useState } from 'react';
import { Text, TextInput, View, Button, Alert } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

export default function App() {
  const [text, setText] = useState('');
  const [tam, setTam] = useState('');

  return (
    <View style={{padding: 50}}>
      <TextInput
        style={{Width: 40},{borderWidth:1}}
        placeholder=""
        onChangeText={newText => setText(newText)}
        
    />

    <Button
      title="show"
       style={{Width: 40}}
      onPress={()=>{setTam(text)}}
      
    />
  
    <Text style={{padding: 10, fontSize: 42}}>
          {
            title = tam
          }
    </Text>
    

    </View>
  );
}


