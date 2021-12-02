import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, TextInput } from 'react-native';
import { BlurView } from 'expo-blur';

import AddIcon from './common/icons/AddIcon'
import { Container, Title, Button, ButtonText, ImageElement } from './styledComponents'



const App = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState("");
  console.log("updated text", text)
  console.log("updated Number", number)
  return (
    <>

      <Container>
        <BlurView intensity={100} style={styles.blurContainer}>
          <Title>Hello</Title>
        </BlurView>

        <ImageElement source={{ uri: 'https://assets.ccbp.in/frontend/hooks/emojis-search/grinning-face-with-big-eyes-img.png' }} />
        <AddIcon />
        <Button
          onPress={() => alert('Hello, world!')}
        >
          <ButtonText>Pick a photo</ButtonText>
        </Button>
      </Container>
      <SafeAreaView>
        <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  blurContainer: {
    padding: 20,
    justifyContent: 'center',
  },
});



export default App
