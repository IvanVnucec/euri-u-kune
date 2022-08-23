import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text } from "react-native";

export default function App() {
  const [inputNumber, setInputNumber] = React.useState(null);
  const [convertedNumber, setConvertedNumber] = React.useState('0.00');

  const convertEurosToHRK = (eur) => {
    const exchRate = 7.5345;

    return eur * exchRate;
  };

  const onChangeTextHandler = (input) => {
    setInputNumber(input);

    var hrk = convertEurosToHRK(input);
    setConvertedNumber(hrk);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Convert Euros to Kune</Text>
      <TextInput
        style={styles.input}
        onChangeText={(input) => onChangeTextHandler(input)}
        value={inputNumber}
        placeholder="Price in Euros: eg. 32.20"
        placeholderTextColor="dimgray"
        keyboardType="decimal-pad"
        autoCorrect={false}
      />
      <Text>HRK: {convertedNumber}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});
